"use client"

import { usePermissions } from "@/hooks/usePermissions"
import { Badge } from "@/components/ui/badge/Badge"

interface PermissionInfoProps {
  showDetails?: boolean
  className?: string
}

/**
 * Componente que muestra información de permisos del usuario actual
 */
export default function PermissionInfo({ showDetails = false, className = "" }: PermissionInfoProps) {
  const { 
    userPermissions, 
    isAdmin, 
    isSuperAdmin, 
    isTechAdmin,
    canManageUsers,
    canManageServers,
    canExecuteJobs,
    canViewAudit,
    getAllPermissions
  } = usePermissions()

  if (!userPermissions) {
    return null
  }

  const permissions = getAllPermissions()

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 ${className}`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white">
          Permisos del Usuario
        </h3>
        <Badge 
          variant={isSuperAdmin() ? "success" : isTechAdmin() ? "warning" : "default"}
          className="text-xs"
        >
          {userPermissions.role.replace('_', ' ')}
        </Badge>
      </div>

      <div className="space-y-2">
        {/* Indicadores de permisos principales */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-center gap-2">
            <div className={`h-2 w-2 rounded-full ${canManageUsers() ? 'bg-green-500' : 'bg-gray-300'}`}></div>
            <span className="text-gray-600 dark:text-gray-400">Gestionar Usuarios</span>
          </div>
          
          <div className="flex items-center gap-2">
            <div className={`h-2 w-2 rounded-full ${canManageServers() ? 'bg-green-500' : 'bg-gray-300'}`}></div>
            <span className="text-gray-600 dark:text-gray-400">Gestionar Servidores</span>
          </div>
          
          <div className="flex items-center gap-2">
            <div className={`h-2 w-2 rounded-full ${canExecuteJobs() ? 'bg-green-500' : 'bg-gray-300'}`}></div>
            <span className="text-gray-600 dark:text-gray-400">Ejecutar Jobs</span>
          </div>
          
          <div className="flex items-center gap-2">
            <div className={`h-2 w-2 rounded-full ${canViewAudit() ? 'bg-green-500' : 'bg-gray-300'}`}></div>
            <span className="text-gray-600 dark:text-gray-400">Ver Auditoría</span>
          </div>
        </div>

        {/* Detalles de permisos */}
        {showDetails && (
          <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
            <h4 className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">
              Permisos Detallados ({permissions.length})
            </h4>
            <div className="flex flex-wrap gap-1">
              {permissions.slice(0, 10).map((permission, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {permission.replace(':', ': ')}
                </Badge>
              ))}
              {permissions.length > 10 && (
                <Badge variant="outline" className="text-xs">
                  +{permissions.length - 10} más
                </Badge>
              )}
            </div>
          </div>
        )}

        {/* Información adicional */}
        <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
          <div className="text-xs text-gray-500 dark:text-gray-400">
            <p>ID: {userPermissions.userId}</p>
            <p>Permisos globales: {userPermissions.globalPermissions.length}</p>
            <p>Permisos por servidor: {userPermissions.serverPermissions.length}</p>
            <p>Permisos personalizados: {userPermissions.customPermissions.length}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
