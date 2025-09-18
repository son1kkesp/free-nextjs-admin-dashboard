"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";

export default function DevFeaturesPage() {
  const { session } = useAuth();
  const [testResults, setTestResults] = useState<string[]>([]);

  const runFeatureTest = async (feature: string) => {
    setTestResults(prev => [...prev, `🧪 Probando ${feature}...`]);
    
    // Simular test
    setTimeout(() => {
      setTestResults(prev => [...prev, `✅ ${feature} - Test completado exitosamente`]);
    }, 2000);
  };

  const features = [
    { name: "Sincronización de Usuarios", description: "Test de sincronización con servidores Emby" },
    { name: "Creación de Demos", description: "Test de creación y gestión de demos" },
    { name: "Gestión de Paquetes", description: "Test de asignación de paquetes a usuarios" },
    { name: "Sistema de Colas", description: "Test de procesamiento de colas de trabajo" },
    { name: "API de Emby", description: "Test de conectividad con APIs de Emby" },
  ];

  return (
    <div className="container mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          🧪 Testing de Funciones
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Entorno de testing para probar nuevas funcionalidades antes de implementarlas en producción.
        </p>
        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <p className="text-sm text-blue-700 dark:text-blue-300">
            <strong>Usuario actual:</strong> {session?.user?.email} ({session?.user?.role})
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Lista de funciones para probar */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Funciones Disponibles para Testing
          </h2>
          {features.map((feature, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                {feature.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {feature.description}
              </p>
              <button
                onClick={() => runFeatureTest(feature.name)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Probar Función
              </button>
            </div>
          ))}
        </div>

        {/* Resultados de tests */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Resultados de Tests
          </h2>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 h-96 overflow-y-auto">
            {testResults.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400 text-center">
                No hay tests ejecutados aún
              </p>
            ) : (
              <div className="space-y-2">
                {testResults.map((result, index) => (
                  <div key={index} className="text-sm font-mono">
                    {result}
                  </div>
                ))}
              </div>
            )}
          </div>
          {testResults.length > 0 && (
            <button
              onClick={() => setTestResults([])}
              className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
            >
              Limpiar Resultados
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
