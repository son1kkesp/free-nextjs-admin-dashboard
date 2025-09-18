# Script de inicialización para terminal
# Este script se ejecuta automáticamente al abrir una nueva terminal

# Limpiar pantalla
Clear-Host

# Mostrar información del proyecto
Write-Host "🚀 Emby Admin Dashboard - Terminal Inicializada" -ForegroundColor Green
Write-Host "📁 Directorio: $(Get-Location)" -ForegroundColor Cyan
Write-Host "🌿 Rama: $(git branch --show-current 2>$null)" -ForegroundColor Yellow
Write-Host "📊 Estado: $(git status --porcelain 2>$null | Measure-Object | Select-Object -ExpandProperty Count) archivos modificados" -ForegroundColor Magenta
Write-Host ""

# Comandos útiles
Write-Host "💡 Comandos útiles:" -ForegroundColor Blue
Write-Host "  - git status          : Ver estado del repositorio" -ForegroundColor Gray
Write-Host "  - git log --oneline   : Ver commits recientes" -ForegroundColor Gray
Write-Host "  - npm run dev         : Iniciar servidor de desarrollo" -ForegroundColor Gray
Write-Host "  - docker ps           : Ver contenedores activos" -ForegroundColor Gray
Write-Host "  - Clear-Host          : Limpiar pantalla" -ForegroundColor Gray
Write-Host ""

# Verificar si Docker está corriendo
$dockerStatus = docker ps 2>$null
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Docker está corriendo" -ForegroundColor Green
} else {
    Write-Host "❌ Docker no está corriendo" -ForegroundColor Red
}

Write-Host "─────────────────────────────────────────────────────────────" -ForegroundColor DarkGray
