"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { usePermissions } from "@/hooks/usePermissions";

export default function SessionDebug() {
  const { data: session, status, update } = useSession();
  const { userPermissions, isSuperAdmin, isTechAdmin } = usePermissions();

  // Forzar la actualización de la sesión al cargar el componente
  React.useEffect(() => {
    console.log('🔍 SessionDebug - Forcing session update...');
    update();
  }, [update]);

  if (status === "loading") {
    return (
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
          🔍 Debug de Sesión - Cargando...
        </h3>
      </div>
    );
  }

  return (
    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
      <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4">
        🔍 Debug de Sesión
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Información de la sesión */}
        <div>
          <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">📋 Información de Sesión:</h4>
          <div className="space-y-1 text-sm">
            <p><strong>Status:</strong> <span className="font-mono">{status}</span></p>
            <p><strong>Autenticado:</strong> <span className="font-mono">{session ? 'Sí' : 'No'}</span></p>
            {session?.user && (
              <>
                <p><strong>ID:</strong> <span className="font-mono">{session.user.id}</span></p>
                <p><strong>Email:</strong> <span className="font-mono">{session.user.email}</span></p>
                <p><strong>Rol:</strong> <span className="font-mono">{session.user.role}</span></p>
                <p><strong>Activo:</strong> <span className="font-mono">{session.user.isActive ? 'Sí' : 'No'}</span></p>
              </>
            )}
          </div>
        </div>

        {/* Información de permisos */}
        <div>
          <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">🔐 Información de Permisos:</h4>
          <div className="space-y-1 text-sm">
            <p><strong>Super Admin:</strong> <span className="font-mono">{isSuperAdmin() ? 'Sí' : 'No'}</span></p>
            <p><strong>Tech Admin:</strong> <span className="font-mono">{isTechAdmin() ? 'Sí' : 'No'}</span></p>
            {userPermissions && (
              <>
                <p><strong>Rol en Permisos:</strong> <span className="font-mono">{userPermissions.role}</span></p>
                <p><strong>Permisos Globales:</strong> <span className="font-mono">{userPermissions.globalPermissions.length}</span></p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Sesión completa en JSON */}
      <div className="mt-4">
        <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">📄 Sesión Completa (JSON):</h4>
        <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-xs overflow-auto">
          {JSON.stringify(session, null, 2)}
        </pre>
      </div>

      {/* Permisos completos en JSON */}
      <div className="mt-4">
        <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">🔐 Permisos Completos (JSON):</h4>
        <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-xs overflow-auto">
          {JSON.stringify(userPermissions, null, 2)}
        </pre>
      </div>
    </div>
  );
}
