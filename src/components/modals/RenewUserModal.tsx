"use client";

import React, { useState } from 'react';
import { useToastContext } from '@/components/providers/ToastProvider';
import { Modal, UserInfo, ModalActions } from '@/components/ui/Modal';

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

  const handleSubmit = async () => {
    if (!user) return;

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
    if (!user) return '';
    
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

  const renewIcon = (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  );

  return (
    <Modal
      isOpen={isOpen && !!user}
      onClose={onClose}
      title="Renovar Usuario"
      subtitle="Amplía el tiempo de acceso"
      icon={renewIcon}
      gradientFrom="from-green-500"
      gradientTo="to-emerald-600"
      isLoading={isLoading}
      size="lg"
    >
      {user && (
        <>
          <UserInfo user={user} />

          <div className="space-y-6">
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
                  disabled={isLoading}
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
                  disabled={isLoading}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                    creditType === 'ONE_CONNECTION'
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300'
                      : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
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
                  disabled={isLoading}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                    creditType === 'TWO_CONNECTIONS'
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300'
                      : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
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
            <ModalActions
              onCancel={onClose}
              onSubmit={handleSubmit}
              submitText="Renovar Usuario"
              submitIcon="✅"
              isLoading={isLoading}
              submitVariant="success"
            />
          </div>
        </>
      )}
    </Modal>
  );
}