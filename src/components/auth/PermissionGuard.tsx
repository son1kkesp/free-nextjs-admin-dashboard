"use client"

import { ReactNode } from "react"
import { usePermissions } from "@/hooks/usePermissions"
import { Resource, Action, AllPermissions } from "@/lib/permissions"

interface PermissionGuardProps {
  children: ReactNode
  permission?: AllPermissions
  resource?: Resource
  action?: Action
  serverId?: string
  fallback?: ReactNode
  requireAll?: boolean
  permissions?: AllPermissions[]
}

/**
 * Componente que protege contenido basado en permisos
 */
export default function PermissionGuard({
  children,
  permission,
  resource,
  action,
  serverId,
  fallback = null,
  requireAll = false,
  permissions = []
}: PermissionGuardProps) {
  const { hasPermission, canPerform, hasAnyPermission, hasAllPermissions } = usePermissions()

  // Verificar permiso específico
  if (permission) {
    if (!hasPermission(permission, serverId)) {
      return <>{fallback}</>
    }
  }

  // Verificar permiso por recurso y acción
  if (resource && action) {
    if (!canPerform(resource, action, serverId)) {
      return <>{fallback}</>
    }
  }

  // Verificar múltiples permisos
  if (permissions.length > 0) {
    const hasRequiredPermissions = requireAll 
      ? hasAllPermissions(permissions)
      : hasAnyPermission(permissions)
    
    if (!hasRequiredPermissions) {
      return <>{fallback}</>
    }
  }

  return <>{children}</>
}

/**
 * Hook para verificar permisos en componentes
 */
export function usePermissionGuard() {
  const permissions = usePermissions()

  return {
    guard: (props: Omit<PermissionGuardProps, 'children'>) => 
      (children: ReactNode) => <PermissionGuard {...props}>{children}</PermissionGuard>,
    ...permissions
  }
}
