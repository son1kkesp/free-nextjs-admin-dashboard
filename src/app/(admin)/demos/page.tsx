"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { UserRole } from "@prisma/client";
import PermissionGuard from "@/components/auth/PermissionGuard";
import CreateDemoModal from "@/components/demos/CreateDemoModal";
import DemoCard from "@/components/demos/DemoCard";
import { useApiList } from "@/hooks/useApi";
import Button from "@/components/ui/button/Button";
import SelectField from "@/components/form/select/SelectField";
import InputField from "@/components/form/input/InputField";

interface Demo {
  id: string;
  email: string;
  password: string;
  embyUserName: string;
  serverId: string;
  serverName: string;
  serverIsTest: boolean;
  hoursDuration: number;
  expirationDate: string;
  isActive: boolean;
  isExpired: boolean;
  status: string;
  timeRemaining: number;
  hoursRemaining: number;
  minutesRemaining: number;
  createdAt: string;
  createdBy: string;
  createdByRole: string;
}

export default function DemosPage() {
  const { data: session } = useSession();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [filters, setFilters] = useState({
    search: "",
    status: "all",
    serverId: "all"
  });
  
  const { 
    items: demos, 
    loading, 
    error, 
    pagination, 
    fetchItems,
    refresh 
  } = useApiList<Demo>("/api/demos");

  // Cargar demos con filtros
  useEffect(() => {
    const params: Record<string, any> = {};
    
    if (filters.search) params.search = filters.search;
    if (filters.status !== "all") params.status = filters.status;
    if (filters.serverId !== "all") params.serverId = filters.serverId;
    
    fetchItems(params);
  }, [filters, fetchItems]);

  const handleDemoCreated = () => {
    refresh();
  };

  const handleDemoUpdated = () => {
    refresh();
  };

  const handleDemoDeleted = () => {
    refresh();
  };

  const handleDemoConverted = () => {
    refresh();
  };

  const getEnvironmentTitle = () => {
    if (session?.user?.role === UserRole.TECH_ADMIN) {
      return "Demos de Desarrollo";
    } else if (session?.user?.role === UserRole.SUPER_ADMIN) {
      return "Demos de Producción";
    }
    return "Gestión de Demos";
  };

  const getEnvironmentDescription = () => {
    if (session?.user?.role === UserRole.TECH_ADMIN) {
      return "Gestiona demos temporales en servidores de desarrollo para pruebas y testing.";
    } else if (session?.user?.role === UserRole.SUPER_ADMIN) {
      return "Gestiona demos temporales en servidores de producción para clientes potenciales.";
    }
    return "Gestiona demos temporales del sistema.";
  };

  const getEnvironmentBadge = () => {
    if (session?.user?.role === UserRole.TECH_ADMIN) {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
          🧪 Entorno de Desarrollo
        </span>
      );
    } else if (session?.user?.role === UserRole.SUPER_ADMIN) {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
          🚀 Entorno de Producción
        </span>
      );
    }
    return null;
  };

  const getStats = () => {
    const total = demos.length;
    const active = demos.filter(d => d.status === 'ACTIVO').length;
    const expired = demos.filter(d => d.status === 'EXPIRADO').length;
    const nearExpired = demos.filter(d => d.status === 'CASI EXPIRADO').length;

    return { total, active, expired, nearExpired };
  };

  const stats = getStats();

  if (loading && demos.length === 0) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-2">Cargando demos...</span>
      </div>
    );
  }

  return (
    <PermissionGuard permission="demos:read">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {getEnvironmentTitle()}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              {getEnvironmentDescription()}
            </p>
            {getEnvironmentBadge()}
          </div>
          <PermissionGuard permission="demos:create">
            <Button
              onClick={() => setShowCreateModal(true)}
              className="mt-4 sm:mt-0"
            >
              Crear Nuevo Demo
            </Button>
          </PermissionGuard>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">📊</span>
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total</p>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">{stats.total}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400 text-sm font-medium">✅</span>
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Activos</p>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">{stats.active}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600 dark:text-yellow-400 text-sm font-medium">⏰</span>
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Casi Expirando</p>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">{stats.nearExpired}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
                  <span className="text-red-600 dark:text-red-400 text-sm font-medium">❌</span>
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Expirados</p>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">{stats.expired}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filtros */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InputField
              label="Buscar"
              value={filters.search}
              onChange={(e) => setFilters({ ...filters, search: e.target.value })}
              placeholder="Buscar por email o usuario Emby..."
            />
            
            <SelectField
              label="Estado"
              value={filters.status}
              onChange={(e) => setFilters({ ...filters, status: e.target.value })}
              options={[
                { value: "all", label: "Todos los estados" },
                { value: "active", label: "Activos" },
                { value: "near-expired", label: "Casi expirando" },
                { value: "expired", label: "Expirados" },
                { value: "inactive", label: "Inactivos" }
              ]}
            />
            
            <SelectField
              label="Servidor"
              value={filters.serverId}
              onChange={(e) => setFilters({ ...filters, serverId: e.target.value })}
              options={[
                { value: "all", label: "Todos los servidores" },
                // TODO: Cargar servidores dinámicamente
              ]}
            />
          </div>
        </div>

        {/* Lista de Demos */}
        {error ? (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <p className="text-red-800 dark:text-red-200">Error: {error}</p>
          </div>
        ) : demos.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8 text-center">
            <div className="text-gray-400 dark:text-gray-500 mb-4">
              <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              No hay demos
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              {filters.search || filters.status !== "all" || filters.serverId !== "all"
                ? "No se encontraron demos con los filtros aplicados."
                : "Aún no se han creado demos en este entorno."}
            </p>
            <PermissionGuard permission="demos:create">
              <Button onClick={() => setShowCreateModal(true)}>
                Crear Primer Demo
              </Button>
            </PermissionGuard>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {demos.map((demo) => (
              <DemoCard
                key={demo.id}
                demo={demo}
                onDemoUpdated={handleDemoUpdated}
                onDemoDeleted={handleDemoDeleted}
                onDemoConverted={handleDemoConverted}
              />
            ))}
          </div>
        )}

        {/* Paginación */}
        {pagination.totalPages > 1 && (
          <div className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <div className="text-sm text-gray-700 dark:text-gray-300">
              Mostrando {((pagination.page - 1) * pagination.limit) + 1} a{' '}
              {Math.min(pagination.page * pagination.limit, pagination.total)} de{' '}
              {pagination.total} demos
            </div>
            <div className="flex space-x-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => fetchItems({ page: pagination.page - 1 })}
                disabled={pagination.page <= 1}
              >
                Anterior
              </Button>
              <span className="px-3 py-1 text-sm">
                Página {pagination.page} de {pagination.totalPages}
              </span>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => fetchItems({ page: pagination.page + 1 })}
                disabled={pagination.page >= pagination.totalPages}
              >
                Siguiente
              </Button>
            </div>
          </div>
        )}

        {/* Modal para crear demo */}
        <CreateDemoModal
          isOpen={showCreateModal}
          onClose={() => setShowCreateModal(false)}
          onSuccess={handleDemoCreated}
        />
      </div>
    </PermissionGuard>
  );
}
