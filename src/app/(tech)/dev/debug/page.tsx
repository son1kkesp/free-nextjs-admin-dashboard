"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";

export default function DevDebugPage() {
  const { session } = useAuth();
  const [debugLogs, setDebugLogs] = useState<string[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);

  useEffect(() => {
    if (isMonitoring) {
      const interval = setInterval(() => {
        const timestamp = new Date().toLocaleTimeString();
        const logEntry = `[${timestamp}] DEBUG: Sistema funcionando correctamente`;
        setDebugLogs(prev => [...prev.slice(-9), logEntry]);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isMonitoring]);

  const simulateError = () => {
    const timestamp = new Date().toLocaleTimeString();
    const errorEntry = `[${timestamp}] ERROR: Error simulado para testing - ${Math.random().toString(36).substr(2, 9)}`;
    setDebugLogs(prev => [...prev.slice(-9), errorEntry]);
  };

  const clearLogs = () => {
    setDebugLogs([]);
  };

  return (
    <div className="container mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          🐛 Debug de Errores
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Herramientas de debugging y monitoreo de errores para el entorno de desarrollo.
        </p>
        <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
          <p className="text-sm text-red-700 dark:text-red-300">
            <strong>Entorno:</strong> Desarrollo - Solo para testing
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Panel de control */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Herramientas de Debug
          </h2>
          
          <div className="space-y-3">
            <button
              onClick={() => setIsMonitoring(!isMonitoring)}
              className={`w-full px-4 py-2 rounded-md transition-colors ${
                isMonitoring
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              {isMonitoring ? '⏹️ Detener Monitoreo' : '▶️ Iniciar Monitoreo'}
            </button>

            <button
              onClick={simulateError}
              className="w-full px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors"
            >
              🚨 Simular Error
            </button>

            <button
              onClick={clearLogs}
              className="w-full px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
            >
              🗑️ Limpiar Logs
            </button>
          </div>

          {/* Información del sistema */}
          <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <h3 className="font-medium text-gray-900 dark:text-white mb-3">
              Información del Sistema
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Usuario:</span>
                <span className="text-gray-900 dark:text-white">{session?.user?.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Rol:</span>
                <span className="text-gray-900 dark:text-white">{session?.user?.role}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Entorno:</span>
                <span className="text-gray-900 dark:text-white">Desarrollo</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Estado:</span>
                <span className={`${isMonitoring ? 'text-green-600' : 'text-gray-600'}`}>
                  {isMonitoring ? 'Monitoreando' : 'Inactivo'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Logs de debug */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Logs de Debug
          </h2>
          <div className="bg-black text-green-400 rounded-lg p-4 h-96 overflow-y-auto font-mono text-sm">
            {debugLogs.length === 0 ? (
              <div className="text-gray-500">
                <p>No hay logs disponibles</p>
                <p className="mt-2">Inicia el monitoreo para ver logs en tiempo real</p>
              </div>
            ) : (
              <div className="space-y-1">
                {debugLogs.map((log, index) => (
                  <div key={index} className={log.includes('ERROR') ? 'text-red-400' : 'text-green-400'}>
                    {log}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
