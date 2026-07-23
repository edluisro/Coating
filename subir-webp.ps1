$ErrorActionPreference = 'Stop'

function Quote-Arg {
    param([string]$Value)
    if ($null -eq $Value) { return '""' }
    if ($Value -match '[\s"]') {
        return '"' + ($Value -replace '"', '\"') + '"'
    }
    return $Value
}

function Get-Sha1Hex {
    param([string]$Text)
    $sha1 = [System.Security.Cryptography.SHA1]::Create()
    try {
        $bytes = [System.Text.Encoding]::UTF8.GetBytes($Text)
        $hash = $sha1.ComputeHash($bytes)
        return ([System.BitConverter]::ToString($hash) -replace '-', '').ToLowerInvariant()
    }
    finally {
        $sha1.Dispose()
    }
}

function Invoke-External {
    param(
        [Parameter(Mandatory = $true)][string]$FilePath,
        [Parameter(Mandatory = $true)][string[]]$Arguments,
        [hashtable]$Environment = @{}
    )

    $psi = New-Object System.Diagnostics.ProcessStartInfo
    $psi.FileName = $FilePath
    $psi.Arguments = ($Arguments | ForEach-Object { Quote-Arg $_ }) -join ' '
    $psi.UseShellExecute = $false
    $psi.RedirectStandardOutput = $true
    $psi.RedirectStandardError = $true
    $psi.CreateNoWindow = $true

    foreach ($key in $Environment.Keys) {
        $psi.EnvironmentVariables[$key] = [string]$Environment[$key]
    }

    $proc = [System.Diagnostics.Process]::Start($psi)
    $stdout = $proc.StandardOutput.ReadToEnd()
    $stderr = $proc.StandardError.ReadToEnd()
    $proc.WaitForExit()

    [pscustomobject]@{
        ExitCode = $proc.ExitCode
        StdOut   = $stdout
        StdErr   = $stderr
    }
}

function Get-SourceImage {
    $searchRoots = @(
        (Join-Path $PSScriptRoot 'IMG'),
        (Join-Path $PSScriptRoot 'img')
    )

    foreach ($root in $searchRoots) {
        if (Test-Path $root) {
            $file = Get-ChildItem -Path $root -File | Where-Object {
                $_.Extension -in '.jpg', '.jpeg', '.png', '.webp'
            } | Select-Object -First 1
            if ($file) {
                return $file
            }
        }
    }

    throw 'No encontré una imagen compatible dentro de IMG o img.'
}

function Ensure-AskPassExe {
    $helperDir = Join-Path $PSScriptRoot '.tmp'
    $helperExe = Join-Path $helperDir 'ssh-askpass.exe'
    $helperCs = Join-Path $helperDir 'ssh-askpass.cs'

    if (-not (Test-Path $helperDir)) {
        New-Item -ItemType Directory -Path $helperDir | Out-Null
    }

    if (-not (Test-Path $helperExe)) {
        @'
using System;
class AskPass {
    static int Main() {
        Console.Write(Environment.GetEnvironmentVariable("SSH_PASS") ?? "");
        return 0;
    }
}
'@ | Set-Content -Path $helperCs -Encoding ASCII

        $cscPaths = @(
            (Join-Path $env:WINDIR 'Microsoft.NET\Framework64\v4.0.30319\csc.exe'),
            (Join-Path $env:WINDIR 'Microsoft.NET\Framework\v4.0.30319\csc.exe')
        )

        $csc = $cscPaths | Where-Object { Test-Path $_ } | Select-Object -First 1
        if (-not $csc) {
            throw 'No encontré csc.exe para compilar el helper de SSH.'
        }

        $compile = & $csc /nologo /target:exe /out:$helperExe $helperCs 2>&1
        if ($LASTEXITCODE -ne 0) {
            throw "No pude compilar askpass.exe: $compile"
        }
    }

    return $helperExe
}

$cloudName = $env:CLOUDINARY_CLOUD_NAME
$apiKey = $env:CLOUDINARY_API_KEY
$apiSecret = $env:CLOUDINARY_API_SECRET
$sshPass = $env:SSH_PASS

if (-not $cloudName -or -not $apiKey -or -not $apiSecret) {
    throw 'Faltan CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY o CLOUDINARY_API_SECRET.'
}

if (-not $sshPass) {
    throw 'Falta SSH_PASS para la subida por DreamHost.'
}

$source = Get-SourceImage
$baseName = [IO.Path]::GetFileNameWithoutExtension($source.Name)
$safeName = ($baseName -replace '[^a-zA-Z0-9_-]+', '-').Trim('-')
if (-not $safeName) {
    $safeName = 'image'
}

$workDir = Join-Path $PSScriptRoot 'output'
if (-not (Test-Path $workDir)) {
    New-Item -ItemType Directory -Path $workDir | Out-Null
}

$timestamp = [DateTimeOffset]::UtcNow.ToUnixTimeSeconds()
$signatureBase = "public_id=$safeName&timestamp=$timestamp"
$signature = Get-Sha1Hex ($signatureBase + $apiSecret)

Write-Host "Subiendo a Cloudinary: $($source.FullName)"
$uploadArgs = @(
    '-sS',
    '--fail',
    "https://api.cloudinary.com/v1_1/$cloudName/image/upload",
    '-F', "file=@$($source.FullName)",
    '-F', "api_key=$apiKey",
    '-F', "timestamp=$timestamp",
    '-F', "public_id=$safeName",
    '-F', "signature=$signature"
)

$uploadJson = & curl.exe @uploadArgs
if ($LASTEXITCODE -ne 0) {
    throw "Cloudinary falló: $uploadJson"
}

$upload = $uploadJson | ConvertFrom-Json
$cloudinaryWebpUrl = "https://res.cloudinary.com/$cloudName/image/upload/f_webp/v$($upload.version)/$($upload.public_id).webp"
$localWebp = Join-Path $workDir "$safeName.webp"

Write-Host "Bajando versión webp desde Cloudinary..."
& curl.exe -sS --fail -L $cloudinaryWebpUrl -o $localWebp
if ($LASTEXITCODE -ne 0) {
    throw 'No pude descargar el archivo webp desde Cloudinary.'
}

$askpassExe = Ensure-AskPassExe
$remoteDir = '~/tempserver.fastansweragency.com/img'
$remoteHost = 'tempserver@vps60725.dreamhostps.com'
$remoteFile = "$remoteDir/$safeName.webp"
$dreamhostUrl = "https://tempserver.fastansweragency.com/img/$safeName.webp"

$envBackup = @{
    SSH_ASKPASS          = $env:SSH_ASKPASS
    SSH_ASKPASS_REQUIRE  = $env:SSH_ASKPASS_REQUIRE
    SSH_PASS             = $env:SSH_PASS
    DISPLAY              = $env:DISPLAY
}

try {
    $env:SSH_ASKPASS = $askpassExe
    $env:SSH_ASKPASS_REQUIRE = 'force'
    $env:DISPLAY = '1'

    Write-Host 'Creando carpeta remota...'
    & ssh.exe -o StrictHostKeyChecking=accept-new -o PreferredAuthentications=password -o PubkeyAuthentication=no $remoteHost "mkdir -p $remoteDir"
    if ($LASTEXITCODE -ne 0) {
        throw 'No pude crear la carpeta remota en DreamHost.'
    }

    Write-Host 'Subiendo a DreamHost...'
    $scpTarget = "${remoteHost}:$remoteFile"
    & scp.exe -o StrictHostKeyChecking=accept-new -o PreferredAuthentications=password -o PubkeyAuthentication=no $localWebp $scpTarget
    if ($LASTEXITCODE -ne 0) {
        throw 'No pude subir el archivo a DreamHost.'
    }
}
finally {
    $env:SSH_ASKPASS = $envBackup.SSH_ASKPASS
    $env:SSH_ASKPASS_REQUIRE = $envBackup.SSH_ASKPASS_REQUIRE
    $env:SSH_PASS = $envBackup.SSH_PASS
    $env:DISPLAY = $envBackup.DISPLAY
}

Write-Host ''
Write-Host 'Listo'
Write-Host "Cloudinary: $cloudinaryWebpUrl"
Write-Host "DreamHost:  $dreamhostUrl"
