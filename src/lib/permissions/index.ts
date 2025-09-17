/**
 * Sistema de Permisos Granulares (RBAC)
 * 
 * Este sistema permite definir permisos específicos por recurso y acción,
 * más allá de los roles básicos.
 */

// Tipos de recursos en el sistema
export type Resource = 
  | 'users'
  | 'servers'
  | 'demos'
  | 'packages'
  | 'policies'
  | 'libraries'
  | 'jobs'
  | 'audit'
  | 'settings'

// Tipos de acciones que se pueden realizar
export type Action = 
  | 'create'
  | 'read'
  | 'update'
  | 'delete'
  | 'execute'
  | 'manage'

// Permiso específico: recurso + acción
export type Permission = `${Resource}:${Action}`

// Permisos especiales
export type SpecialPermission = 
  | 'admin:all'
  | 'system:maintenance'
  | 'audit:view_all'
  | 'users:impersonate'

// Unión de todos los permisos
export type AllPermissions = Permission | SpecialPermission

// Definición de permisos por rol
export const ROLE_PERMISSIONS: Record<string, AllPermissions[]> = {
  SUPER_ADMIN: [
    'admin:all', // Acceso total
    'system:maintenance',
    'audit:view_all',
    'users:impersonate'
  ],

  TECH_ADMIN: [
    // Gestión de usuarios
    'users:create',
    'users:read',
    'users:update',
    'users:delete',
    
    // Gestión de servidores
    'servers:create',
    'servers:read',
    'servers:update',
    'servers:delete',
    
    // Gestión de demos
    'demos:create',
    'demos:read',
    'demos:update',
    'demos:delete',
    
    // Gestión de paquetes
    'packages:create',
    'packages:read',
    'packages:update',
    'packages:delete',
    
    // Gestión de políticas
    'policies:create',
    'policies:read',
    'policies:update',
    'policies:delete',
    
    // Gestión de librerías
    'libraries:create',
    'libraries:read',
    'libraries:update',
    'libraries:delete',
    
    // Jobs y mantenimiento
    'jobs:execute',
    'jobs:read',
    'system:maintenance',
    
    // Auditoría
    'audit:read',
    'audit:view_all'
  ],

  PREMIUM_RESELLER: [
    // Gestión limitada de usuarios
    'users:create',
    'users:read',
    'users:update',
    
    // Solo lectura de servidores
    'servers:read',
    
    // Gestión de demos
    'demos:create',
    'demos:read',
    'demos:update',
    'demos:delete',
    
    // Gestión de paquetes
    'packages:create',
    'packages:read',
    'packages:update',
    
    // Solo lectura de políticas
    'policies:read',
    
    // Solo lectura de librerías
    'libraries:read',
    
    // Jobs limitados
    'jobs:read'
  ],

  ADVANCED_RESELLER: [
    // Gestión básica de usuarios
    'users:create',
    'users:read',
    'users:update',
    
    // Solo lectura de servidores
    'servers:read',
    
    // Gestión limitada de demos
    'demos:create',
    'demos:read',
    'demos:update',
    
    // Solo lectura de paquetes
    'packages:read',
    
    // Solo lectura de políticas
    'policies:read',
    
    // Solo lectura de librerías
    'libraries:read'
  ],

  BASIC_RESELLER: [
    // Solo lectura de usuarios
    'users:read',
    
    // Solo lectura de servidores
    'servers:read',
    
    // Gestión muy limitada de demos
    'demos:create',
    'demos:read',
    
    // Solo lectura de paquetes
    'packages:read',
    
    // Solo lectura de políticas
    'policies:read',
    
    // Solo lectura de librerías
    'libraries:read'
  ]
}

// Permisos específicos por servidor
export interface ServerPermission {
  serverId: string
  permissions: AllPermissions[]
}

// Permisos específicos por usuario
export interface UserPermissions {
  userId: string
  role: string
  globalPermissions: AllPermissions[]
  serverPermissions: ServerPermission[]
  customPermissions: AllPermissions[]
}

/**
 * Verifica si un usuario tiene un permiso específico
 */
export function hasPermission(
  userPermissions: UserPermissions,
  permission: AllPermissions,
  serverId?: string
): boolean {
  // SUPER_ADMIN tiene acceso total
  if (userPermissions.globalPermissions.includes('admin:all')) {
    return true
  }

  // Verificar permisos globales
  if (userPermissions.globalPermissions.includes(permission)) {
    return true
  }

  // Verificar permisos personalizados
  if (userPermissions.customPermissions.includes(permission)) {
    return true
  }

  // Verificar permisos específicos del servidor
  if (serverId) {
    const serverPerms = userPermissions.serverPermissions.find(
      sp => sp.serverId === serverId
    )
    if (serverPerms?.permissions.includes(permission)) {
      return true
    }
  }

  return false
}

/**
 * Obtiene todos los permisos de un rol
 */
export function getRolePermissions(role: string): AllPermissions[] {
  return ROLE_PERMISSIONS[role] || []
}

/**
 * Verifica si un usuario puede realizar una acción en un recurso
 */
export function canPerformAction(
  userPermissions: UserPermissions,
  resource: Resource,
  action: Action,
  serverId?: string
): boolean {
  const permission = `${resource}:${action}` as Permission
  return hasPermission(userPermissions, permission, serverId)
}

/**
 * Obtiene permisos filtrados por servidor
 */
export function getServerPermissions(
  userPermissions: UserPermissions,
  serverId: string
): AllPermissions[] {
  const serverPerms = userPermissions.serverPermissions.find(
    sp => sp.serverId === serverId
  )
  
  return [
    ...userPermissions.globalPermissions,
    ...(serverPerms?.permissions || []),
    ...userPermissions.customPermissions
  ]
}

/**
 * Valida si un usuario puede acceder a un recurso específico
 */
export function validateResourceAccess(
  userPermissions: UserPermissions,
  resource: Resource,
  action: Action,
  serverId?: string
): { allowed: boolean; reason?: string } {
  // Verificar si tiene el permiso
  if (!canPerformAction(userPermissions, resource, action, serverId)) {
    return {
      allowed: false,
      reason: `No tiene permisos para ${action} en ${resource}${serverId ? ` del servidor ${serverId}` : ''}`
    }
  }

  return { allowed: true }
}
