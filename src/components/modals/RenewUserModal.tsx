"use client";

import React, { useState } from 'react';
import { useToastContext } from '@/components/providers/ToastProvider';

interface RenewUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: {
    id: string;
    embyUserEmail: string;
    expirationDate: Date | null;
    creditsAllocated?: number;
    creditsRemaining?: number;
    creditType?: string;
  } | null;
  onSuccess: () => void;
}

export function RenewUserModal({ isOpen, onClose, user, onSuccess }: RenewUserModalProps) {
  const [credits, setCredits] = useState(1);
  const [creditType, setCreditType] = useState<'ONE_CONNECTION' | 'TWO_CONNECTIONS'>('ONE_CONNECTION');
  const [isLoading, setIsLoading] = useState(false);
  const { success, error } = useToastContext();

  if (!isOpen || !user || !user.embyUserEmail) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (credits <= 0) {
      error("Error", "Los créditos deben ser un número positivo.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`/api/users/${user.id}/renew`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ credits, creditType }),
      });

      if (response.ok) {
        success("Éxito", `Usuario ${user.embyUserEmail} renovado exitosamente.`);
        onSuccess();
        onClose();
      } else {
        const data = await response.json();
        error("Error", data.message || "Error al renovar el usuario.");
      }
    } catch (err) {
      console.error("Error renewing user:", err);
      error("Error", "Error de red o interno del servidor.");
    } finally {
      setIsLoading(false);
    }
  };

  const calculateNewExpirationDate = () => {
    const currentExpireAt = user.expirationDate;
    const baseDate = currentExpireAt && new Date(currentExpireAt) > new Date()
      ? new Date(currentExpireAt)
      : new Date();
    
    const monthsInMilliseconds = credits * 30 * 24 * 60 * 60 * 1000; // 30 días por mes
    const newExpiration = new Date(baseDate.getTime() + monthsInMilliseconds);
    
    return newExpiration.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
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
                  Renovar Usuario
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Amplía el tiempo de acceso de este usuario asignando créditos adicionales.
                  </p>
                </div>

                {/* Información del usuario */}
                <div className="mb-4 mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-md">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Usuario a renovar:
                  </p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {user.embyUserEmail}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Créditos adicionales a asignar (1 crédito = 1 mes)
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="12"
                      value={credits}
                      onChange={(e) => setCredits(parseInt(e.target.value))}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Tipo de Conexión
                    </label>
                    <select
                      value={creditType}
                      onChange={(e) => setCreditType(e.target.value as 'ONE_CONNECTION' | 'TWO_CONNECTIONS')}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      required
                    >
                      <option value="ONE_CONNECTION">1 Conexión</option>
                      <option value="TWO_CONNECTIONS">2 Conexiones</option>
                    </select>
                  </div>

                  {/* Resumen de la renovación */}
                  <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                    <p className="text-sm text-blue-800 dark:text-blue-300 mb-2 font-medium">
                      Resumen de la renovación:
                    </p>
                    <div className="space-y-1 text-sm text-blue-700 dark:text-blue-400">
                      <p>• Tipo de conexión: {creditType === 'ONE_CONNECTION' ? '1 Conexión' : '2 Conexiones'}</p>
                      <p className="font-medium">
                        • Nueva fecha de expiración: {calculateNewExpirationDate()}
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm dark:bg-blue-700 dark:hover:bg-blue-800"
                      disabled={isLoading}
                    >
                      {isLoading ? "Renovando..." : "Renovar Usuario"}
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
