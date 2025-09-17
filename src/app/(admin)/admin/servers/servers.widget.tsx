"use client";

import React, { useState } from "react";
import Button from "@/components/ui/button/Button";
import FormModal from "@/components/form/FormModal";
import { useModal } from "@/hooks/useModal";
import { formatDate } from "@/lib/date-utils";
import { 
  BoxCubeIcon, 
  PlusIcon, 
  PencilIcon, 
  TrashBinIcon, 
  CheckCircleIcon,
  AlertIcon
} from "@/icons/index";

interface Server {
  id: string;
  name: string;
  baseUrl: string;
  apiKey: string;
  maxUsers: number;
  createdAt: Date;
  updatedAt: Date;
}

interface ServersWidgetProps {
  servers: Server[];
}

export default function ServersWidget({ servers }: ServersWidgetProps) {
  const { isOpen, openModal, closeModal } = useModal();
  const [editingServer, setEditingServer] = useState<Server | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState<{ success: boolean; message: string } | null>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    baseUrl: "",
    apiKey: "",
    maxUsers: "100",
  });

  const handleCreateServer = () => {
    setEditingServer(null);
    setFormData({ name: "", baseUrl: "", apiKey: "", maxUsers: "100" });
    setTestResult(null);
    openModal();
  };

  const handleEditServer = (server: Server) => {
    setEditingServer(server);
    setFormData({
      name: server.name,
      baseUrl: server.baseUrl,
      apiKey: server.apiKey,
      maxUsers: server.maxUsers?.toString() || "100",
    });
    setTestResult(null);
    openModal();
  };

  const handleDeleteServer = async (serverId: string) => {
    if (!confirm("¿Estás seguro de que quieres eliminar este servidor?")) return;

    try {
      const response = await fetch(`/api/servers/${serverId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        window.location.reload();
      } else {
        alert("Error al eliminar el servidor");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al eliminar el servidor");
    }
  };

  const testConnection = async () => {
    if (!formData.baseUrl || !formData.apiKey) {
      setTestResult({ success: false, message: "Por favor, completa la URL y API Key" });
      return;
    }

    setTesting(true);
    setTestResult(null);

    try {
      const response = await fetch("/api/servers/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          baseUrl: formData.baseUrl, 
          apiKey: formData.apiKey 
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        setTestResult({ success: true, message: "Conexión exitosa" });
      } else {
        setTestResult({ 
          success: false, 
          message: data.error || "Error de conexión" 
        });
      }
    } catch {
      setTestResult({ 
        success: false, 
        message: "Error de conexión" 
      });
    } finally {
      setTesting(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const url = editingServer ? `/api/servers/${editingServer.id}` : "/api/servers";
      const method = editingServer ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          maxUsers: parseInt(formData.maxUsers) || 100,
        }),
      });

      if (response.ok) {
        closeModal();
        window.location.reload();
      } else {
        const errorData = await response.json();
        alert(errorData.error || "Error al guardar el servidor");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al guardar el servidor");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Definir campos del formulario
  const formFields = [
    {
      id: "name",
      label: "Nombre del Servidor",
      type: "text" as const,
      placeholder: "Ej: Mi Servidor Emby",
      required: true,
      value: formData.name,
      onChange: (value: string) => setFormData({ ...formData, name: value }),
      description: "Un nombre descriptivo para identificar este servidor",
    },
    {
      id: "baseUrl",
      label: "URL Base",
      type: "url" as const,
      placeholder: "https://mi-servidor.com",
      required: true,
      value: formData.baseUrl,
      onChange: (value: string) => setFormData({ ...formData, baseUrl: value }),
      description: "La URL completa de tu servidor Emby (incluye https://)",
    },
    {
      id: "apiKey",
      label: "API Key",
      type: "text" as const,
      placeholder: "Tu API Key de Emby",
      required: true,
      value: formData.apiKey,
      onChange: (value: string) => setFormData({ ...formData, apiKey: value }),
      description: "La clave API de tu servidor Emby para autenticación",
    },
    {
      id: "maxUsers",
      label: "Límite Máximo de Usuarios",
      type: "text" as const,
      placeholder: "100",
      required: true,
      value: formData.maxUsers,
      onChange: (value: string) => setFormData({ ...formData, maxUsers: value }),
      description: "Número máximo de usuarios que puede tener este servidor (incluyendo demos)",
    },
  ];

  return (
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-title-md2 font-semibold text-black dark:text-white">
            Servidores Emby
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Gestiona los servidores Emby conectados
          </p>
        </div>
        <Button
          onClick={handleCreateServer}
          startIcon={<PlusIcon />}
        >
          Agregar Servidor
        </Button>
      </div>

      {/* Estadísticas */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Total Servidores</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{servers.length}</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
              <BoxCubeIcon />
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Activos</p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                {servers.length}
              </p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
              <CheckCircleIcon />
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Con Errores</p>
              <p className="text-2xl font-bold text-red-600 dark:text-red-400">
                0
              </p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900">
              <AlertIcon />
            </div>
          </div>
        </div>
      </div>

      {/* Lista de Servidores */}
      <div className="rounded-sm border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="px-4 py-6 md:px-6 xl:px-7.5">
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Lista de Servidores
          </h4>
        </div>

        {servers.length === 0 ? (
          <div className="px-4 py-8 text-center md:px-6 xl:px-7.5">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 mx-auto mb-4">
              <BoxCubeIcon />
            </div>
            <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
              No hay servidores
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Comienza agregando tu primer servidor Emby
            </p>
            <Button
              onClick={handleCreateServer}
              startIcon={<PlusIcon />}
            >
              Agregar Servidor
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 p-4 md:px-6 xl:px-7.5">
            {servers.map((server) => (
              <div
                key={server.id}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                      {server.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      <strong>URL:</strong> {server.baseUrl}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      <strong>API Key:</strong> {server.apiKey.substring(0, 8)}...
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      Creado: {formatDate(server.createdAt)}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleEditServer(server)}
                      variant="outline"
                      startIcon={<PencilIcon />}
                    >
                      Editar
                    </Button>
                    <Button
                      onClick={() => handleDeleteServer(server.id)}
                      variant="outline"
                      startIcon={<TrashBinIcon />}
                      className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                    >
                      Eliminar
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal para crear/editar servidor */}
      <FormModal
        isOpen={isOpen}
        onClose={closeModal}
        title={editingServer ? "Editar Servidor" : "Agregar Servidor"}
        fields={formFields}
        onSubmit={handleSubmit}
        submitText={editingServer ? "Actualizar Servidor" : "Crear Servidor"}
        isSubmitting={isSubmitting}
        icon={<BoxCubeIcon />}
        description={editingServer ? "Modifica la configuración del servidor Emby" : "Conecta un nuevo servidor Emby a tu panel de administración"}
      >
        {/* Test Connection */}
        <div className="space-y-4">
          <div className="text-center">
            <h4 className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Probar Conexión
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Verifica que la configuración sea correcta antes de guardar
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              onClick={testConnection}
              disabled={testing}
              className="flex-1 rounded-xl bg-gradient-to-r from-green-600 to-blue-600 px-6 py-3 text-sm font-medium text-white shadow-lg transition-all duration-200 hover:from-green-700 hover:to-blue-700 hover:shadow-xl disabled:opacity-50"
            >
              {testing ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                  Probando...
                </div>
              ) : (
                "Probar Conexión"
              )}
            </Button>
          </div>

          {testResult && (
            <div className={`rounded-xl p-4 ${
              testResult.success 
                ? "bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 dark:from-green-900/20 dark:to-emerald-900/20 dark:text-green-400" 
                : "bg-gradient-to-r from-red-50 to-pink-50 text-red-700 dark:from-red-900/20 dark:to-pink-900/20 dark:text-red-400"
            }`}>
              <div className="flex items-center gap-3">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full ${
                  testResult.success 
                    ? "bg-green-100 dark:bg-green-900" 
                    : "bg-red-100 dark:bg-red-900"
                }`}>
                  {testResult.success ? <CheckCircleIcon /> : <AlertIcon />}
                </div>
                <span className="text-sm font-medium">{testResult.message}</span>
              </div>
            </div>
          )}
        </div>
      </FormModal>
    </div>
  );
}