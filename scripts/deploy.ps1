# ===========================================
# EMBY ADMIN DASHBOARD - WINDOWS DEPLOYMENT SCRIPT
# ===========================================

param(
    [string]$Domain = "your-domain.com",
    [string]$AppName = "emby-admin-dashboard"
)

# Configuración
$ErrorActionPreference = "Stop"
$AppDir = "C:\inetpub\$AppName"
$ServiceName = "EmbyAdminDashboard"

# Colores para output
function Write-ColorOutput($ForegroundColor) {
    $fc = $host.UI.RawUI.ForegroundColor
    $host.UI.RawUI.ForegroundColor = $ForegroundColor
    if ($args) {
        Write-Output $args
    } else {
        $input | Write-Output
    }
    $host.UI.RawUI.ForegroundColor = $fc
}

function Write-Success($message) {
    Write-ColorOutput Green "[$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')] $message"
}

function Write-Error($message) {
    Write-ColorOutput Red "[ERROR] $message"
    exit 1
}

function Write-Warning($message) {
    Write-ColorOutput Yellow "[WARNING] $message"
}

# Verificar que estamos en el directorio correcto
if (-not (Test-Path "package.json")) {
    Write-Error "No se encontró package.json. Ejecuta este script desde la raíz del proyecto."
}

Write-Success "🚀 Iniciando despliegue de Emby Admin Dashboard..."

try {
    # 1. Verificar Node.js
    Write-Success "Verificando Node.js..."
    $nodeVersion = node --version
    Write-Success "Node.js versión: $nodeVersion"

    # 2. Instalar dependencias
    Write-Success "Instalando dependencias..."
    npm ci --production

    # 3. Generar build de producción
    Write-Success "Generando build de producción..."
    npm run build

    # 4. Configurar variables de entorno
    Write-Success "Configurando variables de entorno..."
    if (-not (Test-Path ".env")) {
        Write-Warning "Archivo .env no encontrado. Copiando desde ejemplo..."
        Copy-Item "env.production.example" ".env"
        Write-Warning "IMPORTANTE: Edita .env con tus configuraciones reales"
    }

    # 5. Configurar base de datos
    Write-Success "Configurando base de datos..."
    npx prisma migrate deploy
    npx prisma generate

    # 6. Crear servicio de Windows (requiere permisos de administrador)
    Write-Success "Creando servicio de Windows..."
    $serviceExists = Get-Service -Name $ServiceName -ErrorAction SilentlyContinue
    if ($serviceExists) {
        Write-Warning "El servicio $ServiceName ya existe. Deteniendo..."
        Stop-Service -Name $ServiceName -Force
    }

    # Crear el servicio usando sc.exe
    $currentPath = (Get-Location).Path
    $nodePath = (Get-Command node).Source
    $serviceCommand = "`"$nodePath`" `"$currentPath\server.js`""
    
    sc.exe create $ServiceName binPath= $serviceCommand start= auto DisplayName= "Emby Admin Dashboard"
    if ($LASTEXITCODE -ne 0) {
        Write-Warning "No se pudo crear el servicio. Ejecuta como administrador."
    } else {
        Write-Success "Servicio creado exitosamente"
    }

    # 7. Configurar IIS (opcional)
    Write-Success "Configurando IIS..."
    if (Get-WindowsFeature -Name IIS-WebServerRole -ErrorAction SilentlyContinue) {
        Write-Success "IIS detectado. Configurando sitio web..."
        
        # Crear sitio web en IIS
        Import-Module WebAdministration -ErrorAction SilentlyContinue
        if (Get-Module WebAdministration) {
            New-Website -Name $AppName -Port 80 -PhysicalPath $currentPath -ErrorAction SilentlyContinue
            Write-Success "Sitio web creado en IIS"
        }
    }

    # 8. Iniciar servicio
    Write-Success "Iniciando servicio..."
    Start-Service -Name $ServiceName -ErrorAction SilentlyContinue

    # 9. Verificar estado
    Write-Success "Verificando estado del servicio..."
    $service = Get-Service -Name $ServiceName -ErrorAction SilentlyContinue
    if ($service) {
        Write-Success "Estado del servicio: $($service.Status)"
    }

    Write-Success "✅ Despliegue completado exitosamente!"
    Write-Success "🌐 Tu aplicación debería estar disponible en: http://localhost:3000"
    Write-Success "📊 Para monitorear logs: Get-EventLog -LogName Application -Source $ServiceName"
    Write-Success "🔧 Para reiniciar: Restart-Service -Name $ServiceName"

    Write-Host ""
    Write-Host "📋 PRÓXIMOS PASOS:" -ForegroundColor Cyan
    Write-Host "1. Edita .env con tus configuraciones reales" -ForegroundColor White
    Write-Host "2. Reinicia el servicio: Restart-Service -Name $ServiceName" -ForegroundColor White
    Write-Host "3. Configura tu base de datos PostgreSQL" -ForegroundColor White
    Write-Host "4. Ejecuta el seed: npm run db:seed" -ForegroundColor White

} catch {
    Write-Error "Error durante el despliegue: $($_.Exception.Message)"
}
