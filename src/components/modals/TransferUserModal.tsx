"use client";

import React, { useState } from 'react';
import { useToastContext } from '@/components/providers/ToastProvider';

interface TransferUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: {
    id: string;
    embyUserEmail?: string;
    embyUserName?: string;
    server?: {
      id: string;
      name: string;
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

  if (!isOpen || !user) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!targetServerId) {
      error("Error", "Por favor selecciona un servidor de destino.");
      return;
    }

    if (targetServerId === user.server?.id) {
      error("Error", "El usuario ya está en este servidor.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`/api/users/${user.id}/transfer`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ targetServerId }),
      });

      if (response.ok) {
        const userIdentifier = user.embyUserEmail || user.embyUserName || `ID: ${user.id}`;
        const targetServer = servers.find(s => s.id === targetServerId);
        success("Éxito", `Usuario ${userIdentifier} transferido a ${targetServer?.name} exitosamente.`);
        onSuccess();
        onClose();
      } else {
        const data = await response.json();
        error("Error", data.message || "Error al transferir el usuario.");
      }
    } catch (err) {
      error("Error", "Error de conexión. Inténtalo de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  const targetServer = servers.find(s => s.id === targetServerId);

  return (
    <div className={`fixed inset-0 z-50 overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}>
      <div className="flex items-center justify-center min-h-screen px-4 text-center">
        {/* Overlay */}
        <div className="fixed inset-0 transition-opacity" aria-hidden="true" onClick={onClose}>
          <div className="absolute inset-0 bg-gray-900 opacity-50 backdrop-blur-sm"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        {/* Modal */}
        <div className="inline-block align-bottom bg-white dark:bg-gray-800 rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full border border-gray-200 dark:border-gray-700">
          {/* Header con gradiente */}
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 px-6 py-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/20 rounded-xl">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Transferir Usuario
                  </h3>
                  <p className="text-purple-100 text-sm">
                    Mueve el usuario a otro servidor
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-xl transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="px-6 py-6">
            {/* Información del usuario */}
            <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-800 rounded-lg">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Usuario a transferir</h4>
              </div>
              <div className="space-y-2">
                {user.embyUserEmail && (
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-blue-700 dark:text-blue-300">📧</span>
                    <span className="text-blue-900 dark:text-blue-100 font-medium">{user.embyUserEmail}</span>
                  </div>
                )}
                {user.embyUserName && (
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-blue-700 dark:text-blue-300">👤</span>
                    <span className="text-blue-900 dark:text-blue-100 font-medium">{user.embyUserName}</span>
                  </div>
                )}
                {user.server && (
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-blue-700 dark:text-blue-300">🖥️</span>
                    <span className="text-blue-900 dark:text-blue-100 font-medium">
                      Servidor actual: {user.server.name}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Selección de servidor */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  <span className="flex items-center space-x-2">
                    <span>🎯</span>
                    <span>Servidor de destino</span>
                  </span>
                </label>
                <select
                  value={targetServerId}
                  onChange={(e) => setTargetServerId(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white transition-all duration-200 text-lg font-medium"
                  required
                >
                  <option value="">Selecciona un servidor...</option>
                  {servers
                    .filter(server => server.id !== user.server?.id)
                    .map((server) => (
                      <option key={server.id} value={server.id}>
                        {server.name}
                      </option>
                    ))}
                </select>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Selecciona el servidor al que quieres transferir este usuario
                </p>
              </div>

              {/* Resumen de transferencia */}
              {targetServerId && (
                <div className="p-4 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-purple-600 dark:text-purple-400">📋</span>
                    <h4 className="font-semibold text-purple-900 dark:text-purple-100">Resumen de transferencia</h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-purple-700 dark:text-purple-300">Usuario:</span>
                      <span className="font-medium text-purple-900 dark:text-purple-100">
                        {user.embyUserEmail || user.embyUserName || `ID: ${user.id}`}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-700 dark:text-purple-300">Desde:</span>
                      <span className="font-medium text-purple-900 dark:text-purple-100">
                        {user.server?.name || 'Sin servidor'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-700 dark:text-purple-300">Hacia:</span>
                      <span className="font-semibold text-purple-900 dark:text-purple-100">
                        {targetServer?.name}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Advertencia */}
              <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
                <div className="flex items-start space-x-3">
                  <span className="text-yellow-600 dark:text-yellow-400 text-lg">⚠️</span>
                  <div>
                    <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-1">
                      Advertencia
                    </h4>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300">
                      Esta acción transferirá permanentemente el usuario al servidor seleccionado. 
                      El usuario perderá acceso al servidor actual.
                    </p>
                  </div>
                </div>
              </div>

              {/* Botones */}
              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-4 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 font-medium"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={isLoading || !targetServerId}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl hover:from-purple-600 hover:to-indigo-700 focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 transition-all duration-200 font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Procesando...</span>
                    </>
                  ) : (
                    <>
                      <span>🔄</span>
                      <span>Transferir Usuario</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}