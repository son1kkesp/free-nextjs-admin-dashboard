"use client";

import React, { useState } from 'react';
import { useToastContext } from '@/components/providers/ToastProvider';

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

  if (!isOpen || !demo || !demo.embyUser || !demo.embyUser.email) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (credits <= 0) {
      error('Los créditos deben ser un número positivo');
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
        success(`Demo convertida exitosamente. ${credits} crédito${credits > 1 ? 's' : ''} asignado${credits > 1 ? 's' : ''} (${creditType === 'ONE_CONNECTION' ? '1 conexión' : '2 conexiones'})`);
        onSuccess();
        onClose();
        setCredits(1);
        setCreditType('ONE_CONNECTION');
      } else {
        const errorData = await response.json();
        error(`Error: ${errorData.message}`);
      }
    } catch (err) {
      console.error('Error converting demo:', err);
      error('Error al convertir la demo');
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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Convertir Demo a Usuario
            </h3>
            <button
              onClick={handleClose}
              disabled={isLoading}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 disabled:opacity-50"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="mb-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Convirtiendo demo de:
            </p>
            <p className="font-medium text-gray-900 dark:text-white">
              {demo.embyUser.email}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Créditos a Asignar
              </label>
              <input
                type="number"
                min="1"
                max="12"
                value={credits}
                onChange={(e) => setCredits(parseInt(e.target.value) || 1)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Número de créditos (1 crédito = 1 mes)"
                required
                disabled={isLoading}
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                1 crédito = 1 mes de acceso
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Tipo de Conexión
              </label>
              <select
                value={creditType}
                onChange={(e) => setCreditType(e.target.value as 'ONE_CONNECTION' | 'TWO_CONNECTIONS')}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                disabled={isLoading}
              >
                <option value="ONE_CONNECTION">1 Conexión Simultánea</option>
                <option value="TWO_CONNECTIONS">2 Conexiones Simultáneas</option>
              </select>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Número de dispositivos que pueden conectarse al mismo tiempo
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-md p-3">
              <h4 className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-1">
                Resumen de Conversión
              </h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                • {credits} crédito{credits > 1 ? 's' : ''} = {credits} mes{credits > 1 ? 'es' : ''} de acceso
              </p>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                • {creditType === 'ONE_CONNECTION' ? '1' : '2'} conexión{creditType === 'TWO_CONNECTIONS' ? 'es' : ''} simultánea{creditType === 'TWO_CONNECTIONS' ? 's' : ''}
              </p>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                • Expira: {new Date(Date.now() + credits * 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}
              </p>
            </div>

            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={handleClose}
                disabled={isLoading}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
              >
                {isLoading ? 'Convirtiendo...' : 'Convertir Demo'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
