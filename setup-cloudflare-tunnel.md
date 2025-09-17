# Configuración de Cloudflare Tunnel

## Paso 1: Instalar cloudflared
```bash
# Windows (usando chocolatey)
choco install cloudflared

# O descargar desde: https://github.com/cloudflare/cloudflared/releases
```

## Paso 2: Autenticarse
```bash
cloudflared tunnel login
```

## Paso 3: Crear túnel
```bash
# Crear un nuevo túnel
cloudflared tunnel create emby-admin

# Esto te dará un ID de túnel, guárdalo
```

## Paso 4: Configurar el túnel
```bash
# Crear archivo de configuración
cloudflared tunnel route dns emby-admin emby-admin.tu-dominio.com
```

## Paso 5: Ejecutar el túnel
```bash
# Ejecutar el túnel hacia tu puerto 3000
cloudflared tunnel --url http://localhost:3000 run emby-admin
```

## Paso 6: Configurar DNS (opcional)
Si tienes un dominio, puedes configurar un subdominio:
```bash
cloudflared tunnel route dns emby-admin emby-admin.tu-dominio.com
```
