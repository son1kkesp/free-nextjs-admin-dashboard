"use client"

import { useState, useEffect } from "react"
import Button from "@/components/ui/button/Button"
import { ArrowRightIcon, PlugInIcon, UserIcon, PlugInIcon as ServerIcon } from "@/icons/index"

interface SyncStats {
  active: number
  expired: number
  total: number
  creditTypes: Record<string, number>
  servers: number
}

interface SyncResult {
  totalUsers: number
  syncedUsers: number
  errors: string[]
  warnings: string[]
  success: boolean
  changes: {
    enabled: number
    disabled: number
    passwordUpdated: number
    policyUpdated: number
  }
}

export default function UserSyncWidget() {
  const [stats, setStats] = useState<SyncStats | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isSyncing, setIsSyncing] = useState(false)
  const [lastSync, setLastSync] = useState<SyncResult | null>(null)
  const [error, setError] = useState("")
  const [options, setOptions] = useState({
    dryRun: false,
    forceUpdate: false
  })

  const fetchStats = async () => {
    setIsLoading(true)
    setError("")
    
    try {
      const response = await fetch("/api/jobs/sync-users")
      if (!response.ok) {
        throw new Error("Error al obtener estadísticas")
      }
      
      const data = await response.json()
      setStats(data.stats)
    } catch (error) {
      setError(error instanceof Error ? error.message : "Error desconocido")
    } finally {
      setIsLoading(false)
    }
  }

  const runSync = async () => {
    setIsSyncing(true)
    setError("")
    
    try {
      const response = await fetch("/api/jobs/sync-users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(options)
      })
      
      if (!response.ok) {
        throw new Error("Error al ejecutar sincronización")
      }
      
      const data = await response.json()
      setLastSync(data.result)
      
      // Actualizar estadísticas
      setStats(data.stats)
      
    } catch (error) {
      setError(error instanceof Error ? error.message : "Error desconocido")
    } finally {
      setIsSyncing(false)
    }
  }

  useEffect(() => {
    fetchStats()
  }, [])

  if (isLoading && !stats) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-4"></div>
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Sincronización de Usuarios
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Sincroniza usuarios entre la BD local y servidores Emby
          </p>
        </div>
        <Button
          onClick={fetchStats}
          variant="outline"
          startIcon={<ArrowRightIcon />}
          disabled={isLoading}
        >
          {isLoading ? "Cargando..." : "Actualizar"}
        </Button>
      </div>

      {error && (
        <div className="mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">
          {error}
        </div>
      )}

      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-sm text-green-700 dark:text-green-300">Activos</span>
            </div>
            <p className="text-2xl font-bold text-green-900 dark:text-green-100">
              {stats.active}
            </p>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-red-500"></div>
              <span className="text-sm text-red-700 dark:text-red-300">Expirados</span>
            </div>
            <p className="text-2xl font-bold text-red-900 dark:text-red-100">
              {stats.expired}
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
            <div className="flex items-center gap-2">
              <ServerIcon className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-blue-700 dark:text-blue-300">Servidores</span>
            </div>
            <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">
              {stats.servers}
            </p>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
            <div className="flex items-center gap-2">
              <UserIcon className="h-4 w-4 text-purple-600" />
              <span className="text-sm text-purple-700 dark:text-purple-300">Total</span>
            </div>
            <p className="text-2xl font-bold text-purple-900 dark:text-purple-100">
              {stats.total}
            </p>
          </div>
        </div>
      )}

      {/* Opciones de sincronización */}
      <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
          Opciones de Sincronización
        </h4>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={options.dryRun}
              onChange={(e) => setOptions({ ...options, dryRun: e.target.checked })}
              className="rounded border-gray-300"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Modo simulación (no realizar cambios reales)
            </span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={options.forceUpdate}
              onChange={(e) => setOptions({ ...options, forceUpdate: e.target.checked })}
              className="rounded border-gray-300"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Forzar actualización (ignorar cache)
            </span>
          </label>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <Button
            onClick={runSync}
            startIcon={<PlugInIcon />}
            disabled={isSyncing}
            className="bg-blue-600 hover:bg-blue-700"
          >
            {isSyncing ? "Sincronizando..." : "Sincronizar Usuarios"}
          </Button>
        </div>

        {lastSync && (
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <p>
              Última sync: {lastSync.syncedUsers}/{lastSync.totalUsers} usuarios
            </p>
            <p className="text-green-600 dark:text-green-400">
              Cambios: {lastSync.changes.enabled + lastSync.changes.disabled + lastSync.changes.policyUpdated}
            </p>
          </div>
        )}
      </div>

      {lastSync && (lastSync.errors.length > 0 || lastSync.warnings.length > 0) && (
        <div className="mt-4 space-y-3">
          {lastSync.errors.length > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-md p-3">
              <h4 className="text-sm font-medium text-red-800 dark:text-red-200 mb-2">
                Errores ({lastSync.errors.length}):
              </h4>
              <ul className="text-xs text-red-700 dark:text-red-300 space-y-1">
                {lastSync.errors.slice(0, 3).map((error, index) => (
                  <li key={index}>• {error}</li>
                ))}
                {lastSync.errors.length > 3 && (
                  <li>• ... y {lastSync.errors.length - 3} más</li>
                )}
              </ul>
            </div>
          )}

          {lastSync.warnings.length > 0 && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3">
              <h4 className="text-sm font-medium text-yellow-800 dark:text-yellow-200 mb-2">
                Advertencias ({lastSync.warnings.length}):
              </h4>
              <ul className="text-xs text-yellow-700 dark:text-yellow-300 space-y-1">
                {lastSync.warnings.slice(0, 3).map((warning, index) => (
                  <li key={index}>• {warning}</li>
                ))}
                {lastSync.warnings.length > 3 && (
                  <li>• ... y {lastSync.warnings.length - 3} más</li>
                )}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
