"use client";

import React, { useState } from 'react';
import { useToastContext } from '@/components/providers/ToastProvider';
import { Modal, ModalActions } from '@/components/ui/Modal';

interface ConvertDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  demo: {
    id: string;
    embyUser: {
      email: string;
    };
  } | null;
  onSuccess: () => void;
}

export function ConvertDemoModal({ isOpen, onClose, demo, onSuccess }: ConvertDemoModalProps) {
  const [credits, setCredits] = useState(1);
  const [creditType, setCreditType] = useState<'ONE_CONNECTION' | 'TWO_CONNECTIONS'>('ONE_CONNECTION');
  const [isLoading, setIsLoading] = useState(false);
  const { success, error } = useToastContext();

  const handleSubmit = async () => {
    if (!demo) return;
    
    if (credits <= 0) {
      error("Error", 'Los créditos deben ser un número positivo');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`/api/demos/${demo.id}/convert`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          credits,
          creditType,
        }),
      });

      if (response.ok) {
        success("Éxito", `Demo convertida exitosamente. ${credits} crédito${credits > 1 ? 's' : ''} asignado${credits > 1 ? 's' : ''} (${creditType === 'ONE_CONNECTION' ? '1 conexión' : '2 conexiones'})`);
        onSuccess();
        onClose();
        setCredits(1);
        setCreditType('ONE_CONNECTION');
      } else {
        const errorData = await response.json();
        error("Error", `Error: ${errorData.message}`);
      }
    } catch (err) {
      console.error('Error converting demo:', err);
      error("Error", 'Error al convertir la demo');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    if (!isLoading) {
      onClose();
      setCredits(1);
      setCreditType('ONE_CONNECTION');
    }
  };

  const convertIcon = (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );

  return (
    <Modal
      isOpen={isOpen && !!demo}
      onClose={handleClose}
      title="Convertir Demo a Usuario"
      subtitle="Transforma la demo en una cuenta permanente"
      icon={convertIcon}
      variant="warning"
      isLoading={isLoading}
      size="md"
    >
      {demo && (
        <>
          {/* Información de la demo */}
          <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-gray-100 dark:bg-gray-600 rounded-lg">
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">Demo a convertir</h4>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">📧</span>
              <span className="text-gray-900 dark:text-gray-100 font-medium">{demo.embyUser.email}</span>
            </div>
          </div>

          <div className="space-y-6">
            {/* Créditos */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                <span className="flex items-center space-x-2">
                  <span>💎</span>
                  <span>Créditos a asignar</span>
                </span>
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="1"
                  max="12"
                  value={credits}
                  onChange={(e) => setCredits(parseInt(e.target.value) || 1)}
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white transition-all duration-200 text-lg font-medium"
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
                1 crédito = 1 mes de acceso
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
                      ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300'
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
                      ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300'
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
            <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl border border-orange-200 dark:border-orange-800">
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-orange-600 dark:text-orange-400">📋</span>
                <h4 className="font-semibold text-orange-900 dark:text-orange-100">Resumen de conversión</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-orange-700 dark:text-orange-300">Demo:</span>
                  <span className="font-medium text-orange-900 dark:text-orange-100">{demo.embyUser.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-700 dark:text-orange-300">Créditos:</span>
                  <span className="font-medium text-orange-900 dark:text-orange-100">{credits} mes{credits > 1 ? 'es' : ''}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-orange-700 dark:text-orange-300">Conexiones:</span>
                  <span className="font-semibold text-orange-900 dark:text-orange-100">
                    {creditType === 'ONE_CONNECTION' ? '1 Conexión' : '2 Conexiones'}
                  </span>
                </div>
              </div>
            </div>

            {/* Botones */}
            <ModalActions
              onCancel={handleClose}
              onSubmit={handleSubmit}
              submitText="Convertir Demo"
              submitIcon="⚡"
              isLoading={isLoading}
              submitVariant="warning"
            />
          </div>
        </>
      )}
    </Modal>
  );
}