#!/bin/sh

echo "🚀 Iniciando aplicación con túnel..."

# Instalar dependencias
npm install

# Instalar localtunnel globalmente
npm install -g localtunnel

# Iniciar la aplicación en background
echo "📱 Iniciando aplicación Next.js..."
npm run dev &

# Esperar a que la aplicación esté lista
echo "⏳ Esperando a que la aplicación esté lista..."
sleep 15

# Crear túnel con bypass
echo "🌐 Creando túnel público..."
lt --port 3000 --subdomain emby-admin-$(date +%s) --bypass-tunnel-reminder &

echo "✅ Aplicación y túnel iniciados!"
echo "🔗 El túnel se creará automáticamente"
echo "📊 Puedes ver el estado en los logs del contenedor"

# Mantener el contenedor corriendo
wait
