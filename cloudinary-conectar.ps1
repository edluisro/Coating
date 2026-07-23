$ErrorActionPreference = 'Stop'

if (-not $env:CLOUDINARY_CLOUD_NAME -or -not $env:CLOUDINARY_API_KEY -or -not $env:CLOUDINARY_API_SECRET) {
    Write-Host "Faltan variables de entorno."
    Write-Host "Define estas 3 antes de ejecutar:"
    Write-Host "  `$env:CLOUDINARY_CLOUD_NAME"
    Write-Host "  `$env:CLOUDINARY_API_KEY"
    Write-Host "  `$env:CLOUDINARY_API_SECRET"
    exit 1
}

$cloudName = $env:CLOUDINARY_CLOUD_NAME
$apiKey = $env:CLOUDINARY_API_KEY
$apiSecret = $env:CLOUDINARY_API_SECRET

$pair = "$apiKey`:$apiSecret"
$bytes = [System.Text.Encoding]::ASCII.GetBytes($pair)
$basicAuth = [Convert]::ToBase64String($bytes)

$headers = @{
    Authorization = "Basic $basicAuth"
}

$uri = "https://api.cloudinary.com/v1_1/$cloudName/usage"

Write-Host "Probando conexion con Cloudinary..."
try {
    $response = Invoke-RestMethod -Method Get -Uri $uri -Headers $headers
    Write-Host "Conexion OK"
    $response | ConvertTo-Json -Depth 10
}
catch {
    Write-Host "No se pudo conectar a Cloudinary"
    Write-Host $_.Exception.Message
    exit 1
}
