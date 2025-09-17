"use client";

import React, { useState } from 'react';
import { useToastContext } from '@/components/providers/ToastProvider';

interface RenewUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: {
    id: string;
    embyUserEmail?: string;
    embyUserName?: string;
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

  if (!isOpen || !user) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (credits <= 0) {
      error("Error", "Los créditos deben ser mayor a 0.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`/api/users/${user.id}/renew`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ credits, creditType }),
      });

      if (response.ok) {
        const userIdentifier = user.embyUserEmail || user.embyUserName || `ID: ${user.id}`;
        success("Éxito", `Usuario ${userIdentifier} renovado exitosamente.`);
        onSuccess();
        onClose();
      } else {
        const data = await response.json();
        error("Error", data.message || "Error al renovar el usuario.");
      }
    } catch (err) {
      error("Error", "Error de conexión. Inténtalo de nuevo.");
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
        {/* Overlay */}
        <div className="fixed inset-0 transition-opacity" aria-hidden="true" onClick={onClose}>
          <div className="absolute inset-0 bg-gray-900 opacity-50 backdrop-blur-sm"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        {/* Modal */}
        <div className="inline-block align-bottom bg-white dark:bg-gray-800 rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full border border-gray-200 dark:border-gray-700">
          {/* Header con gradiente */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/20 rounded-xl">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Renovar Usuario
                  </h3>
                  <p className="text-green-100 text-sm">
                    Amplía el tiempo de acceso
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
            {/* Información del usuario con diseño mejorado */}
            <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-800 rounded-lg">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Usuario a renovar</h4>
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
                {!user.embyUserEmail && !user.embyUserName && (
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-blue-700 dark:text-blue-300">🆔</span>
                    <span className="text-blue-900 dark:text-blue-100 font-medium">ID: {user.id}</span>
                  </div>
                )}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Créditos */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  <span className="flex items-center space-x-2">
                    <span>💎</span>
                    <span>Créditos adicionales</span>
                  </span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    max="12"
                    value={credits}
                    onChange={(e) => setCredits(parseInt(e.target.value) || 1)}
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white transition-all duration-200 text-lg font-medium"
                    placeholder="Ingresa la cantidad de créditos"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      {credits === 1 ? 'mes' : 'meses'}
                    </span>
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  1 crédito = 1 mes de acceso adicional
                </p>
              </div>

              {/* Tipo de conexión */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  <span className="flex items-center space-x-2">
                    <span>🔗</span>
                    <span>Tipo de Conexión</span>
                  </span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setCreditType('ONE_CONNECTION')}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                      creditType === 'ONE_CONNECTION'
                        ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300'
                        : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-2xl mb-2">🔌</div>
                      <div className="font-semibold">1 Conexión</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Acceso estándar</div>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setCreditType('TWO_CONNECTIONS')}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                      creditType === 'TWO_CONNECTIONS'
                        ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300'
                        : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-2xl mb-2">🔗</div>
                      <div className="font-semibold">2 Conexiones</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Acceso premium</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Resumen */}
              <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-green-600 dark:text-green-400">📋</span>
                  <h4 className="font-semibold text-green-900 dark:text-green-100">Resumen de renovación</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-green-700 dark:text-green-300">Tipo de conexión:</span>
                    <span className="font-medium text-green-900 dark:text-green-100">
                      {creditType === 'ONE_CONNECTION' ? '1 Conexión' : '2 Conexiones'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700 dark:text-green-300">Nueva fecha de expiración:</span>
                    <span className="font-semibold text-green-900 dark:text-green-100">
                      {calculateNewExpirationDate()}
                    </span>
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
                  disabled={isLoading}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 transition-all duration-200 font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
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
                      <span>✅</span>
                      <span>Renovar Usuario</span>
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