#!/bin/bash

# ===========================================
# EMBY ADMIN DASHBOARD - DEPLOYMENT SCRIPT
# ===========================================

set -e  # Exit on any error

echo "🚀 Iniciando despliegue de Emby Admin Dashboard..."

# Variables
APP_NAME="emby-admin-dashboard"
APP_DIR="/opt/$APP_NAME"
SERVICE_NAME="emby-admin"
DOMAIN="your-domain.com"

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Función para logging
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

error() {
    echo -e "${RED}[ERROR] $1${NC}"
    exit 1
}

warning() {
    echo -e "${YELLOW}[WARNING] $1${NC}"
}

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    error "No se encontró package.json. Ejecuta este script desde la raíz del proyecto."
fi

# 1. Instalar dependencias del sistema
log "Instalando dependencias del sistema..."
sudo apt update
sudo apt install -y nodejs npm postgresql-client nginx certbot python3-certbot-nginx

# 2. Crear usuario para la aplicación
log "Creando usuario para la aplicación..."
sudo useradd -r -s /bin/false $APP_NAME || true

# 3. Crear directorio de la aplicación
log "Creando directorio de la aplicación..."
sudo mkdir -p $APP_DIR
sudo chown $APP_NAME:$APP_NAME $APP_DIR

# 4. Copiar archivos de la aplicación
log "Copiando archivos de la aplicación..."
sudo cp -r . $APP_DIR/
sudo chown -R $APP_NAME:$APP_NAME $APP_DIR

# 5. Instalar dependencias de Node.js
log "Instalando dependencias de Node.js..."
cd $APP_DIR
sudo -u $APP_NAME npm ci --production

# 6. Generar build de producción
log "Generando build de producción..."
sudo -u $APP_NAME npm run build

# 7. Configurar variables de entorno
log "Configurando variables de entorno..."
if [ ! -f "$APP_DIR/.env" ]; then
    warning "Archivo .env no encontrado. Copiando desde ejemplo..."
    sudo cp $APP_DIR/env.production.example $APP_DIR/.env
    warning "IMPORTANTE: Edita $APP_DIR/.env con tus configuraciones reales"
fi

# 8. Configurar base de datos
log "Configurando base de datos..."
sudo -u $APP_NAME npx prisma migrate deploy
sudo -u $APP_NAME npx prisma generate

# 9. Crear servicio systemd
log "Creando servicio systemd..."
sudo tee /etc/systemd/system/$SERVICE_NAME.service > /dev/null <<EOF
[Unit]
Description=Emby Admin Dashboard
After=network.target

[Service]
Type=simple
User=$APP_NAME
WorkingDirectory=$APP_DIR
ExecStart=/usr/bin/npm start
Restart=always
RestartSec=10
Environment=NODE_ENV=production
Environment=PORT=3000

[Install]
WantedBy=multi-user.target
EOF

# 10. Configurar Nginx
log "Configurando Nginx..."
sudo tee /etc/nginx/sites-available/$APP_NAME > /dev/null <<EOF
server {
    listen 80;
    server_name $DOMAIN;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

# 11. Habilitar sitio en Nginx
sudo ln -sf /etc/nginx/sites-available/$APP_NAME /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# 12. Iniciar servicios
log "Iniciando servicios..."
sudo systemctl daemon-reload
sudo systemctl enable $SERVICE_NAME
sudo systemctl start $SERVICE_NAME

# 13. Configurar SSL con Let's Encrypt
log "Configurando SSL con Let's Encrypt..."
sudo certbot --nginx -d $DOMAIN --non-interactive --agree-tos --email admin@$DOMAIN

# 14. Configurar firewall
log "Configurando firewall..."
sudo ufw allow 22
sudo ufw allow 80
sudo ufw allow 443
sudo ufw --force enable

# 15. Verificar estado
log "Verificando estado de los servicios..."
sudo systemctl status $SERVICE_NAME --no-pager
sudo systemctl status nginx --no-pager

log "✅ Despliegue completado exitosamente!"
log "🌐 Tu aplicación está disponible en: https://$DOMAIN"
log "📊 Para monitorear logs: sudo journalctl -u $SERVICE_NAME -f"
log "🔧 Para reiniciar: sudo systemctl restart $SERVICE_NAME"

echo ""
echo "📋 PRÓXIMOS PASOS:"
echo "1. Edita $APP_DIR/.env con tus configuraciones reales"
echo "2. Reinicia el servicio: sudo systemctl restart $SERVICE_NAME"
echo "3. Configura tu base de datos PostgreSQL"
echo "4. Ejecuta el seed: sudo -u $APP_NAME npm run db:seed"
