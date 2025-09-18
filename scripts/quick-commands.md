# 🚀 Comandos Rápidos - Emby Admin Dashboard

## 📋 Comandos de Desarrollo

```bash
# Desarrollo
npm run dev                 # Iniciar servidor de desarrollo
npm run build              # Construir para producción
npm run start              # Iniciar servidor de producción

# Docker
docker-compose up -d       # Iniciar contenedores
docker-compose down        # Detener contenedores
docker ps                  # Ver contenedores activos
docker logs emby_admin_app # Ver logs de la aplicación

# Base de datos
npx prisma studio          # Abrir Prisma Studio
npx prisma migrate dev     # Aplicar migraciones
npx prisma generate        # Regenerar cliente Prisma

# Git
git status                 # Ver estado del repositorio
git add .                  # Añadir todos los cambios
git commit -m "mensaje"    # Hacer commit
git push                   # Subir cambios
git log --oneline          # Ver commits recientes

# Usuarios de prueba
node prisma/create-admin.cjs        # Crear SUPER_ADMIN
node prisma/create-tech-admin.cjs   # Crear TECH_ADMIN
```

## 🔧 Comandos de Mantenimiento

```bash
# Limpiar
Clear-Host                # Limpiar pantalla (PowerShell)
cls                       # Limpiar pantalla (CMD)

# Verificar estado
pwd                       # Ver directorio actual
ls                        # Listar archivos
ll                        # Listar archivos (alias)
la                        # Listar archivos ocultos (alias)

# Información del proyecto
git branch --show-current # Ver rama actual
git status --porcelain    # Ver archivos modificados
```

## 🚨 Solución de Problemas

```bash
# Si la terminal se queda "stuck"
# 1. Abrir nueva terminal: Ctrl + Shift + `
# 2. O usar: Clear-Host

# Si hay errores de dependencias
npm install               # Reinstalar dependencias
npm ci                    # Instalación limpia

# Si hay problemas con Docker
docker-compose down       # Detener todo
docker-compose up -d      # Reiniciar
```

## 📁 Estructura de Archivos Importantes

```
src/
├── app/                  # Páginas de Next.js
├── components/           # Componentes React
├── hooks/               # Hooks personalizados
├── lib/                 # Utilidades y configuración
└── layout/              # Componentes de layout

prisma/
├── schema.prisma        # Esquema de base de datos
└── migrations/          # Migraciones de DB

scripts/
├── init-terminal.ps1    # Script de inicialización
└── quick-commands.md    # Este archivo
```
