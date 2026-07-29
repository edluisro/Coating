$ErrorActionPreference = 'Stop'

function Quote-Arg {
    param([string]$Value)
    if ($null -eq $Value) { return '""' }
    if ($Value -match '[\s"]') {
        return '"' + ($Value -replace '"', '\"') + '"'
    }
    return $Value
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

function Ensure-AskPassExe {
    $helperDir = Join-Path $PSScriptRoot '..\.tmp'
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
            throw 'No encontre csc.exe para compilar el helper de SSH.'
        }

        $compile = & $csc /nologo /target:exe /out:$helperExe $helperCs 2>&1
        if ($LASTEXITCODE -ne 0) {
            throw "No pude compilar askpass.exe: $compile"
        }
    }

    return $helperExe
}

$projectRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$exportDir = Join-Path $projectRoot '.next-build'
$sshPass = $env:SSH_PASS
$releaseStamp = Get-Date -Format 'yyyyMMdd-HHmmss'

if (-not (Test-Path $exportDir)) {
    throw 'No existe la carpeta .next-build. Ejecuta el build antes de deploy.'
}

if (-not $sshPass) {
    throw 'Falta SSH_PASS para la subida a DreamHost.'
}

$remoteHost = 'tempserver@vps60725.dreamhostps.com'
$remoteBaseDir = '~/tempserver.fastansweragency.com/landing-next'
$remoteReleaseDir = "~/tempserver.fastansweragency.com/landing-next.__new.$releaseStamp"
$remoteBackupDir = '~/tempserver.fastansweragency.com/landing-next.__old'
$publicUrl = 'https://tempserver.fastansweragency.com/landing-next'

$askpassExe = Ensure-AskPassExe
$envBackup = @{
    SSH_ASKPASS         = $env:SSH_ASKPASS
    SSH_ASKPASS_REQUIRE = $env:SSH_ASKPASS_REQUIRE
    SSH_PASS            = $env:SSH_PASS
    DISPLAY             = $env:DISPLAY
}

try {
    $env:SSH_ASKPASS = $askpassExe
    $env:SSH_ASKPASS_REQUIRE = 'force'
    $env:DISPLAY = '1'

    Write-Host 'Preparando carpeta remota...'
    & ssh.exe -o StrictHostKeyChecking=accept-new -o PreferredAuthentications=password -o PubkeyAuthentication=no $remoteHost "mkdir -p ~/tempserver.fastansweragency.com"
    if ($LASTEXITCODE -ne 0) {
        throw 'No pude crear la carpeta remota del sitio.'
    }

    Write-Host 'Preparando release temporal...'
    & ssh.exe -o StrictHostKeyChecking=accept-new -o PreferredAuthentications=password -o PubkeyAuthentication=no $remoteHost "rm -rf $remoteBackupDir && mkdir -p $remoteReleaseDir"
    if ($LASTEXITCODE -ne 0) {
        throw 'No pude preparar la carpeta temporal del deploy.'
    }

    Write-Host 'Subiendo export estatico a DreamHost...'
    & ssh.exe -o StrictHostKeyChecking=accept-new -o PreferredAuthentications=password -o PubkeyAuthentication=no $remoteHost "mkdir -p $remoteReleaseDir/out"
    if ($LASTEXITCODE -ne 0) {
        throw 'No pude preparar la carpeta out del release remoto.'
    }

    & scp.exe -r -o StrictHostKeyChecking=accept-new -o PreferredAuthentications=password -o PubkeyAuthentication=no "$exportDir\\*" "${remoteHost}:$remoteReleaseDir/out/"
    if ($LASTEXITCODE -ne 0) {
        throw 'No pude subir el contenido exportado a DreamHost.'
    }

    Write-Host 'Activando nueva version del sitio...'
    & ssh.exe -o StrictHostKeyChecking=accept-new -o PreferredAuthentications=password -o PubkeyAuthentication=no $remoteHost "chmod -R u+rwX $remoteReleaseDir && shopt -s dotglob nullglob && mv $remoteReleaseDir/out/* $remoteReleaseDir/ && rmdir $remoteReleaseDir/out && find $remoteReleaseDir -type d -exec chmod 755 {} + && find $remoteReleaseDir -type f -exec chmod 644 {} + && if [ -d $remoteBaseDir ]; then mv $remoteBaseDir $remoteBackupDir; fi && mv $remoteReleaseDir $remoteBaseDir && if [ -d $remoteBackupDir ]; then chmod -R u+rwX $remoteBackupDir; rm -rf $remoteBackupDir; fi"
    if ($LASTEXITCODE -ne 0) {
        throw 'No pude publicar el sitio en DreamHost.'
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
Write-Host "DreamHost: $publicUrl"
