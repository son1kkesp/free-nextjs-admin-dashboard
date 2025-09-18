"use client";

import { useState } from "react";
import { EmbyUser } from "@/lib/emby";
import Button from "@/components/ui/button/Button";
import { useToast } from "@/hooks/useToast";
import { usePermissions } from "@/hooks/usePermissions";

interface EmbyUserCardProps {
  user: EmbyUser & {
    activeSessions: number;
    isOnline: boolean;
    lastActivity?: string;
  };
  serverId: string;
  onUserUpdated: () => void;
}

export default function EmbyUserCard({ user, serverId, onUserUpdated }: EmbyUserCardProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const { showToast } = useToast();
  const { hasPermission } = usePermissions();

  const handleAction = async (action: string, data?: any) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/emby/users/${user.Id}?serverId=${serverId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action, data }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Action failed');
      }

      const result = await response.json();
      showToast('success', result.message);
      onUserUpdated();
    } catch (error: any) {
      showToast('error', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTerminateSessions = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/emby/users/${user.Id}/sessions?serverId=${serverId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to terminate sessions');
      }

      const result = await response.json();
      showToast('success', result.message);
      onUserUpdated();
    } catch (error: any) {
      showToast('error', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const formatLastActivity = (dateString?: string) => {
    if (!dateString) return 'Nunca';
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return 'Ahora';
    if (diffMins < 60) return `Hace ${diffMins} min`;
    if (diffHours < 24) return `Hace ${diffHours}h`;
    return `Hace ${diffDays} días`;
  };

  const getStatusColor = () => {
    if (user.Policy.IsDisabled) return 'text-red-500';
    if (user.isOnline) return 'text-green-500';
    return 'text-gray-500';
  };

  const getStatusText = () => {
    if (user.Policy.IsDisabled) return 'Bloqueado';
    if (user.isOnline) return 'En línea';
    return 'Desconectado';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
            {user.Name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {user.Name}
            </h3>
            <p className={`text-sm ${getStatusColor()}`}>
              {getStatusText()}
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          {user.isOnline && (
            <div className="flex items-center space-x-1 text-green-600 dark:text-green-400">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm">{user.activeSessions} sesión{user.activeSessions !== 1 ? 'es' : ''}</span>
            </div>
          )}
          
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setShowActions(!showActions)}
            disabled={isLoading}
          >
            {showActions ? 'Ocultar' : 'Acciones'}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div>
          <span className="text-gray-500 dark:text-gray-400">Última actividad:</span>
          <p className="text-gray-900 dark:text-white">{formatLastActivity(user.lastActivity)}</p>
        </div>
        <div>
          <span className="text-gray-500 dark:text-gray-400">Administrador:</span>
          <p className="text-gray-900 dark:text-white">
            {user.Policy.IsAdministrator ? 'Sí' : 'No'}
          </p>
        </div>
        <div>
          <span className="text-gray-500 dark:text-gray-400">Acceso remoto:</span>
          <p className="text-gray-900 dark:text-white">
            {user.Policy.EnableRemoteAccess ? 'Habilitado' : 'Deshabilitado'}
          </p>
        </div>
        <div>
          <span className="text-gray-500 dark:text-gray-400">Descarga:</span>
          <p className="text-gray-900 dark:text-white">
            {user.Policy.EnableContentDownloading ? 'Habilitada' : 'Deshabilitada'}
          </p>
        </div>
      </div>

      {showActions && (
        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
          <div className="flex flex-wrap gap-2">
            {hasPermission('users:update') && (
              <>
                {user.Policy.IsDisabled ? (
                  <Button
                    variant="success"
                    size="sm"
                    onClick={() => handleAction('unblock')}
                    isLoading={isLoading}
                  >
                    Desbloquear
                  </Button>
                ) : (
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => handleAction('block')}
                    isLoading={isLoading}
                  >
                    Bloquear
                  </Button>
                )}
              </>
            )}

            {hasPermission('users:update') && user.activeSessions > 0 && (
              <Button
                variant="danger"
                size="sm"
                onClick={handleTerminateSessions}
                isLoading={isLoading}
              >
                Terminar Sesiones
              </Button>
            )}

            {hasPermission('users:delete') && (
              <Button
                variant="danger"
                size="sm"
                onClick={() => {
                  if (confirm(`¿Estás seguro de que quieres eliminar al usuario ${user.Name}?`)) {
                    handleAction('delete');
                  }
                }}
                isLoading={isLoading}
              >
                Eliminar
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
