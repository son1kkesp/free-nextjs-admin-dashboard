"use client";

import React, { useState } from 'react';
import { useToastContext } from '@/components/providers/ToastProvider';
import { Modal, ModalActions } from '@/components/ui/Modal';

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
  // const [creditType, setCreditType] = useState<'ONE_CONNECTION' | 'TWO_CONNECTIONS'>('ONE_CONNECTION');
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
        body: JSON.stringify({ credits, creditType: user.creditType || 'ONE_CONNECTION' }),
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
    } catch {
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
      variant="success"
      isLoading={isLoading}
      size="md"
    >
      {user && (
        <>
          {/* Información simplificada del usuario */}
          <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="flex items-center space-x-2">
              <span className="text-gray-600 dark:text-gray-400">👤</span>
              <span className="text-gray-900 dark:text-white font-medium">
                {user.embyUserEmail || user.embyUserName || `ID: ${user.id}`}
              </span>
            </div>
          </div>

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


            {/* Resumen simplificado */}
            <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-green-700 dark:text-green-300">Tipo de conexión:</span>
                  <span className="font-medium text-green-900 dark:text-green-100">
                    {user.creditType === 'ONE_CONNECTION' ? '1 Conexión' : '2 Conexiones'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-700 dark:text-green-300">Nueva fecha:</span>
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