"use client";

import React, { useState } from 'react';
import { useToastContext } from '@/components/providers/ToastProvider';

interface TransferUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: {
    id: string;
    embyUser: {
      email: string;
    };
    userServerLink?: {
      server: {
        id: string;
        name: string;
      };
    };
  } | null;
  servers: Array<{
    id: string;
    name: string;
  }>;
  onSuccess: () => void;
}

export function TransferUserModal({ isOpen, onClose, user, servers, onSuccess }: TransferUserModalProps) {
  const [targetServerId, setTargetServerId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { success, error } = useToastContext();

  if (!isOpen || !user || !user.embyUser || !user.embyUser.email) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!targetServerId) {
      error("Error", "Por favor selecciona un servidor de destino.");
      return;
    }

    if (targetServerId === user.userServerLink?.server?.id) {
      error("Error", "El usuario ya está en este servidor.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`/api/users/${user.id}/transfer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ targetServerId }),
      });

      if (response.ok) {
        const targetServer = servers.find(s => s.id === targetServerId);
        success("Éxito", `Usuario ${user.embyUser.email} transferido exitosamente a ${targetServer?.name || 'el servidor seleccionado'}.`);
        onSuccess();
        onClose();
      } else {
        const data = await response.json();
        error("Error", data.message || "Error al transferir el usuario.");
      }
    } catch (err) {
      console.error("Error transferring user:", err);
      error("Error", "Error de red o interno del servidor.");
    } finally {
      setIsLoading(false);
    }
  };

  const getCurrentServerName = () => {
    return user.userServerLink?.server?.name || 'Servidor desconocido';
  };

  return (
    <div className={`fixed inset-0 z-50 overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}>
      <div className="flex items-center justify-center min-h-screen px-4 text-center">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true" onClick={onClose}>
          <div className="absolute inset-0 bg-gray-500 opacity-75 dark:bg-gray-900"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white" id="modal-title">
                  Transferir Usuario
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Mueve este usuario a otro servidor Emby.
                  </p>
                </div>

                {/* Información del usuario */}
                <div className="mb-4 mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-md">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Usuario a transferir:
                  </p>
                  <p className="font-medium text-gray-900 dark:text-white mb-1">
                    {user.embyUser.email}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Servidor actual: <span className="font-medium">{getCurrentServerName()}</span>
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Servidor de destino
                    </label>
                    <select
                      value={targetServerId}
                      onChange={(e) => setTargetServerId(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      required
                    >
                      <option value="">Selecciona un servidor</option>
                      {servers
                        .filter(server => server.id !== user.userServerLink?.server?.id)
                        .map((server) => (
                          <option key={server.id} value={server.id}>
                            {server.name}
                          </option>
                        ))}
                    </select>
                  </div>

                  {/* Resumen de la transferencia */}
                  <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                    <p className="text-sm text-blue-800 dark:text-blue-300 mb-2 font-medium">
                      Resumen de la transferencia:
                    </p>
                    <div className="space-y-1 text-sm text-blue-700 dark:text-blue-400">
                      <p>• Usuario: {user.embyUser.email}</p>
                      <p>• Desde: {getCurrentServerName()}</p>
                      <p>• Hacia: {targetServerId ? servers.find(s => s.id === targetServerId)?.name || 'Servidor seleccionado' : 'Selecciona un servidor'}</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm dark:bg-blue-700 dark:hover:bg-blue-800"
                      disabled={isLoading || !targetServerId}
                    >
                      {isLoading ? "Transfiriendo..." : "Transferir Usuario"}
                    </button>
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-600"
                      onClick={onClose}
                      disabled={isLoading}
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

