"use client"

import { useSession } from "next-auth/react"
import { useMemo } from "react"
import { 
  UserPermissions, 
  hasPermission, 
  canPerformAction,
  getRolePermissions,
  Resource,
  Action,
  AllPermissions
} from "@/lib/permissions"

/**
 * Hook para manejar permisos en el frontend
 */
export function usePermissions() {
  const { data: session } = useSession()

  // Construir objeto de permisos del usuario
  const userPermissions = useMemo((): UserPermissions | null => {
    if (!session?.user) return null

    return {
      userId: session.user.id || '',
      role: session.user.role || 'BASIC_RESELLER',
      globalPermissions: getRolePermissions(session.user.role || 'BASIC_RESELLER'),
      serverPermissions: [], // TODO: Implementar permisos por servidor
      customPermissions: [] // TODO: Implementar permisos personalizados
    }
  }, [session])

  /**
   * Verifica si el usuario tiene un permiso específico
   */
  const hasPermissionCheck = (permission: AllPermissions, serverId?: string): boolean => {
    if (!userPermissions) return false
    return hasPermission(userPermissions, permission, serverId)
  }

  /**
   * Verifica si el usuario puede realizar una acción en un recurso
   */
  const canPerform = (resource: Resource, action: Action, serverId?: string): boolean => {
    if (!userPermissions) return false
    return canPerformAction(userPermissions, resource, action, serverId)
  }

  /**
   * Verifica si el usuario es administrador
   */
  const isAdmin = (): boolean => {
    return hasPermissionCheck('admin:all')
  }

  /**
   * Verifica si el usuario es super admin
   */
  const isSuperAdmin = (): boolean => {
    return userPermissions?.role === 'SUPER_ADMIN'
  }

  /**
   * Verifica si el usuario es tech admin
   */
  const isTechAdmin = (): boolean => {
    return userPermissions?.role === 'TECH_ADMIN'
  }

  /**
   * Verifica si el usuario puede gestionar usuarios
   */
  const canManageUsers = (): boolean => {
    return canPerform('users', 'create') || canPerform('users', 'update') || canPerform('users', 'delete')
  }

  /**
   * Verifica si el usuario puede gestionar servidores
   */
  const canManageServers = (): boolean => {
    return canPerform('servers', 'create') || canPerform('servers', 'update') || canPerform('servers', 'delete')
  }

  /**
   * Verifica si el usuario puede ejecutar jobs
   */
  const canExecuteJobs = (): boolean => {
    return canPerform('jobs', 'execute')
  }

  /**
   * Verifica si el usuario puede ver auditoría
   */
  const canViewAudit = (): boolean => {
    return canPerform('audit', 'read')
  }

  /**
   * Obtiene todos los permisos del usuario
   */
  const getAllPermissions = (): AllPermissions[] => {
    if (!userPermissions) return []
    return userPermissions.globalPermissions
  }

  /**
   * Verifica si el usuario tiene al menos uno de los permisos especificados
   */
  const hasAnyPermission = (permissions: AllPermissions[]): boolean => {
    return permissions.some(permission => hasPermissionCheck(permission))
  }

  /**
   * Verifica si el usuario tiene todos los permisos especificados
   */
  const hasAllPermissions = (permissions: AllPermissions[]): boolean => {
    return permissions.every(permission => hasPermissionCheck(permission))
  }

  return {
    userPermissions,
    hasPermission: hasPermissionCheck,
    canPerform,
    isAdmin,
    isSuperAdmin,
    isTechAdmin,
    canManageUsers,
    canManageServers,
    canExecuteJobs,
    canViewAudit,
    getAllPermissions,
    hasAnyPermission,
    hasAllPermissions
  }
}
