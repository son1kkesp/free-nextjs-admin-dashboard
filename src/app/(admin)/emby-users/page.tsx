"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { EmbyServer } from "@prisma/client";
import PermissionGuard from "@/components/auth/PermissionGuard";
import CreateEmbyUserModal from "@/components/emby/CreateEmbyUserModal";
import EmbyUserCard from "@/components/emby/EmbyUserCard";
import Button from "@/components/ui/button/Button";
import SelectField from "@/components/form/select/SelectField";
import { useToast } from "@/hooks/useToast";

interface EmbyUser {
  Id: string;
  Name: string;
  HasPassword: boolean;
  EnableAutoLogin: boolean;
  LastLoginDate?: string;
  LastActivityDate?: string;
  Policy: {
    IsAdministrator: boolean;
    IsHidden: boolean;
    IsDisabled: boolean;
    EnableRemoteAccess: boolean;
    EnableContentDownloading: boolean;
    MaxActiveSessions: number;
  };
  activeSessions: number;
  isOnline: boolean;
  lastActivity?: string;
}

interface EmbyUsersResponse {
  server: {
    id: string;
    name: string;
    url: string;
  };
  users: EmbyUser[];
}

export default function EmbyUsersPage() {
  const { data: session } = useSession();
  const [servers, setServers] = useState<EmbyServer[]>([]);
  const [selectedServerId, setSelectedServerId] = useState<string>("");
  const [embyUsers, setEmbyUsers] = useState<EmbyUser[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingServers, setIsLoadingServers] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const { showToast } = useToast();

  // Cargar servidores disponibles
  useEffect(() => {
    const fetchServers = async () => {
      try {
        setIsLoadingServers(true);
        const response = await fetch("/api/servers");
        if (!response.ok) {
          throw new Error("Failed to fetch servers");
        }
        const data = await response.json();
        setServers(data);
        
        // Seleccionar el primer servidor por defecto
        if (data.length > 0) {
          setSelectedServerId(data[0].id);
        }
      } catch (err: any) {
        setError(err.message);
        showToast("error", "Error al cargar servidores");
      } finally {
        setIsLoadingServers(false);
      }
    };

    fetchServers();
  }, [showToast]);

  // Cargar usuarios de Emby cuando se selecciona un servidor
  useEffect(() => {
    if (selectedServerId) {
      fetchEmbyUsers();
    }
  }, [selectedServerId]);

  const fetchEmbyUsers = async () => {
    if (!selectedServerId) return;

    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(`/api/emby/users?serverId=${selectedServerId}`);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch Emby users");
      }

      const data: EmbyUsersResponse = await response.json();
      setEmbyUsers(data.users);
    } catch (err: any) {
      setError(err.message);
      showToast("error", err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUserCreated = () => {
    fetchEmbyUsers();
  };

  const handleUserUpdated = () => {
    fetchEmbyUsers();
  };

  const selectedServer = servers.find(s => s.id === selectedServerId);

  return (
    <PermissionGuard permission="users:read">
      <div className="container mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Gestión de Usuarios Emby
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Administra usuarios de tus servidores Emby
            </p>
          </div>
          
          <PermissionGuard permission="users:create">
            <Button
              onClick={() => setShowCreateModal(true)}
              disabled={!selectedServerId || isLoadingServers}
            >
              Crear Usuario
            </Button>
          </PermissionGuard>
        </div>

        {/* Selector de servidor */}
        <div className="mb-6">
          <SelectField
            label="Seleccionar Servidor Emby"
            id="server-select"
            value={selectedServerId}
            onChange={(e) => setSelectedServerId(e.target.value)}
            options={servers.map(server => ({
              value: server.id,
              label: `${server.name} (${server.url})`
            }))}
            disabled={isLoadingServers}
            placeholder="Selecciona un servidor..."
          />
        </div>

        {/* Estado de carga y errores */}
        {isLoadingServers && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Cargando servidores...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
                  Error
                </h3>
                <div className="mt-2 text-sm text-red-700 dark:text-red-300">
                  {error}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Lista de usuarios */}
        {selectedServerId && !isLoadingServers && (
          <>
            {isLoading ? (
              <div className="text-center py-8">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Cargando usuarios...</p>
              </div>
            ) : (
              <>
                {selectedServer && (
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-blue-900 dark:text-blue-100">
                          {selectedServer.name}
                        </h3>
                        <p className="text-sm text-blue-700 dark:text-blue-300">
                          {selectedServer.url}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-blue-700 dark:text-blue-300">
                          {embyUsers.length} usuario{embyUsers.length !== 1 ? 's' : ''}
                        </p>
                        <p className="text-sm text-blue-600 dark:text-blue-400">
                          {embyUsers.filter(u => u.isOnline).length} en línea
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {embyUsers.length === 0 ? (
                  <div className="text-center py-12">
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                    <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
                      No hay usuarios
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      Este servidor no tiene usuarios configurados.
                    </p>
                    <div className="mt-6">
                      <PermissionGuard permission="users:create">
                        <Button
                          onClick={() => setShowCreateModal(true)}
                        >
                          Crear Primer Usuario
                        </Button>
                      </PermissionGuard>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {embyUsers.map((user) => (
                      <EmbyUserCard
                        key={user.Id}
                        user={user}
                        serverId={selectedServerId}
                        onUserUpdated={handleUserUpdated}
                      />
                    ))}
                  </div>
                )}
              </>
            )}
          </>
        )}

        {/* Modal para crear usuario */}
        {selectedServer && (
          <CreateEmbyUserModal
            isOpen={showCreateModal}
            onClose={() => setShowCreateModal(false)}
            onSuccess={handleUserCreated}
            serverId={selectedServerId}
            serverName={selectedServer.name}
          />
        )}
      </div>
    </PermissionGuard>
  );
}
