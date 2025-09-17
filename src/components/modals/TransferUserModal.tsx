"use client";

import React, { useState } from 'react';
import { useToastContext } from '@/components/providers/ToastProvider';
import { Modal, UserInfo, ModalActions } from '@/components/ui/Modal';

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

  const handleSubmit = async () => {
    if (!user) return;

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
    } catch {
      error("Error", "Error de conexión. Inténtalo de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  const targetServer = servers.find(s => s.id === targetServerId);
  const availableServers = servers.filter(server => server.id !== user?.server?.id);

  const transferIcon = (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  );

  return (
    <Modal
      isOpen={isOpen && !!user}
      onClose={onClose}
      title="Transferir Usuario"
      subtitle="Mueve el usuario a otro servidor"
      icon={transferIcon}
      variant="info"
      isLoading={isLoading}
      size="md"
    >
      {user && (
        <>
          <UserInfo user={user} server={user.server} />

          <div className="space-y-6">
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
                disabled={isLoading}
              >
                <option value="">Selecciona un servidor...</option>
                {availableServers.map((server) => (
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
            <ModalActions
              onCancel={onClose}
              onSubmit={handleSubmit}
              submitText="Transferir Usuario"
              submitIcon="🔄"
              isLoading={isLoading}
              submitVariant="warning"
            />
          </div>
        </>
      )}
    </Modal>
  );
}