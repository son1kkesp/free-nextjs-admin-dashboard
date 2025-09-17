# Guía de Despliegue en Producción

## Opciones de Cloud

### 1. 🟢 Vercel (Recomendado para Next.js)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel

# Configurar variables de entorno en el dashboard de Vercel
```

### 2. 🔵 DigitalOcean App Platform
- Crear nueva app
- Conectar repositorio GitHub
- Configurar variables de entorno
- Desplegar automáticamente

### 3. 🟠 Railway
```bash
# Instalar Railway CLI
npm install -g @railway/cli

# Login y desplegar
railway login
railway init
railway up
```

### 4. 🟣 Render
- Conectar repositorio GitHub
- Configurar build command: `npm run build`
- Configurar start command: `npm start`
- Configurar variables de entorno

## Variables de Entorno Necesarias

```env
# Base de datos
DATABASE_URL=postgresql://user:password@host:port/database

# NextAuth
NEXTAUTH_URL=https://tu-dominio.com
NEXTAUTH_SECRET=tu-secreto-super-seguro

# Emby API (si usas integración)
EMBY_API_KEY=tu-api-key
EMBY_BASE_URL=https://tu-emby-server.com
```

## Configuración de Base de Datos

### Opción 1: PostgreSQL en la nube
- **Neon**: https://neon.tech (gratuito)
- **Supabase**: https://supabase.com (gratuito)
- **PlanetScale**: https://planetscale.com (gratuito)

### Opción 2: Docker en VPS
```bash
# En tu VPS
docker run -d \
  --name postgres \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=emby_admin \
  -p 5432:5432 \
  postgres:16-alpine
```

## Configuración de Dominio

1. **Comprar dominio** (Namecheap, GoDaddy, etc.)
2. **Configurar DNS**:
   - A record: `@` → IP del servidor
   - CNAME: `www` → tu-dominio.com
3. **Configurar SSL** (Let's Encrypt automático en la mayoría de plataformas)

