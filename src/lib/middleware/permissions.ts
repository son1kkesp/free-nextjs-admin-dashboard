import { NextRequest, NextResponse } from "next/server"
import { getRolePermissions, validateResourceAccess, UserPermissions } from "@/lib/permissions"

/**
 * Mapeo de rutas a permisos requeridos
 */
const ROUTE_PERMISSIONS: Record<string, { resource: string; action: string; serverId?: string }> = {
  // Gestión de usuarios
  '/users': { resource: 'users', action: 'read' },
  '/users/create': { resource: 'users', action: 'create' },
  '/users/[id]/edit': { resource: 'users', action: 'update' },
  '/users/[id]/delete': { resource: 'users', action: 'delete' },
  
  // Gestión de servidores
  '/servers': { resource: 'servers', action: 'read' },
  '/servers/create': { resource: 'servers', action: 'create' },
  '/servers/[id]/edit': { resource: 'servers', action: 'update' },
  '/servers/[id]/delete': { resource: 'servers', action: 'delete' },
  
  // Gestión de demos
  '/demos': { resource: 'demos', action: 'read' },
  '/demos/create': { resource: 'demos', action: 'create' },
  '/demos/[id]/edit': { resource: 'demos', action: 'update' },
  '/demos/[id]/delete': { resource: 'demos', action: 'delete' },
  
  // Jobs y mantenimiento
  '/jobs': { resource: 'jobs', action: 'read' },
  '/jobs/execute': { resource: 'jobs', action: 'execute' },
  '/jobs/queue': { resource: 'jobs', action: 'execute' },
  
  // Auditoría
  '/audit': { resource: 'audit', action: 'read' },
  '/audit/logs': { resource: 'audit', action: 'read' },
  
  // Configuración
  '/settings': { resource: 'settings', action: 'read' },
  '/settings/users': { resource: 'users', action: 'manage' },
  '/settings/servers': { resource: 'servers', action: 'manage' },
  '/settings/system': { resource: 'system', action: 'manage' }
}

/**
 * Obtiene el permiso requerido para una ruta
 */
function getRequiredPermission(pathname: string): { resource: string; action: string; serverId?: string } | null {
  // Buscar coincidencia exacta
  if (ROUTE_PERMISSIONS[pathname]) {
    return ROUTE_PERMISSIONS[pathname]
  }
  
  // Buscar coincidencia con parámetros dinámicos
  for (const [route, permission] of Object.entries(ROUTE_PERMISSIONS)) {
    if (route.includes('[') && route.includes(']')) {
      // Convertir ruta con parámetros a regex
      const routeRegex = route
        .replace(/\[([^\]]+)\]/g, '([^/]+)')
        .replace(/\//g, '\\/')
      
      const regex = new RegExp(`^${routeRegex}$`)
      if (regex.test(pathname)) {
        return permission
      }
    }
  }
  
  return null
}

/**
 * Crea un objeto de permisos del usuario desde el token
 */
function createUserPermissions(token: any): UserPermissions {
  const role = token?.role || 'BASIC_RESELLER'
  
  return {
    userId: token?.id || '',
    role,
    globalPermissions: getRolePermissions(role),
    serverPermissions: [], // TODO: Implementar permisos por servidor
    customPermissions: [] // TODO: Implementar permisos personalizados
  }
}

/**
 * Valida si un usuario puede acceder a una ruta
 */
export function validateRouteAccess(
  request: NextRequest,
  token: any
): { allowed: boolean; reason?: string; redirectTo?: string } {
  const pathname = request.nextUrl.pathname
  
  // Obtener permiso requerido para la ruta
  const requiredPermission = getRequiredPermission(pathname)
  
  if (!requiredPermission) {
    // Ruta no requiere permisos específicos
    return { allowed: true }
  }
  
  // Crear objeto de permisos del usuario
  const userPermissions = createUserPermissions(token)
  
  // Validar acceso al recurso
  const validation = validateResourceAccess(
    userPermissions,
    requiredPermission.resource as any,
    requiredPermission.action as any,
    requiredPermission.serverId
  )
  
  if (!validation.allowed) {
    // Determinar a dónde redirigir según el tipo de error
    let redirectTo = '/'
    
    if (requiredPermission.resource === 'users' && requiredPermission.action === 'read') {
      redirectTo = '/dashboard'
    } else if (requiredPermission.resource === 'servers' && requiredPermission.action === 'read') {
      redirectTo = '/dashboard'
    } else if (requiredPermission.resource === 'jobs' && requiredPermission.action === 'execute') {
      redirectTo = '/dashboard'
    }
    
    return {
      allowed: false,
      reason: validation.reason,
      redirectTo
    }
  }
  
  return { allowed: true }
}

/**
 * Middleware para validar permisos en rutas específicas
 */
export function withPermissions(
  request: NextRequest,
  token: any
): NextResponse | null {
  const validation = validateRouteAccess(request, token)
  
  if (!validation.allowed) {
    console.log(`🚫 Acceso denegado a ${request.nextUrl.pathname}: ${validation.reason}`)
    
    return NextResponse.redirect(
      new URL(validation.redirectTo || '/', request.url)
    )
  }
  
  return null
}
