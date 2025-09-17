"use client";

import React, { useState } from "react";
import Button from "@/components/ui/button/Button";
import FormModal from "@/components/form/FormModal";
import Label from "@/components/form/Label";
// import Select from "@/components/form/Select";
import { useModal } from "@/hooks/useModal";
import { 
  PageIcon, 
  PlusIcon, 
  PencilIcon, 
  TrashBinIcon,
  CheckCircleIcon,
  BoxCubeIcon,
  TimeIcon
} from "@/icons/index";

interface UserPolicy {
  id: string;
  name: string;
  description: string | null;
  enableTranscoding: boolean;
  maxTranscodingBitrate: number | null;
  transcodingFormats: string | null;
  enableDownload: boolean;
  maxDownloadBitrate: number | null;
  maxStreamingBitrate: number | null;
  enableRemoteAccess: boolean;
  maxDevices: number | null;
  enableSchedule: boolean;
  scheduleStart: string | null;
  scheduleEnd: string | null;
  enableLiveTV: boolean;
  enableSync: boolean;
  enableCameraUpload: boolean;
  serverId: string | null;
  server: {
    id: string;
    name: string;
    baseUrl: string;
  } | null;
  createdAt: Date;
  updatedAt: Date;
}

interface Server {
  id: string;
  name: string;
  baseUrl: string;
}

interface PoliciesWidgetProps {
  policies: UserPolicy[];
  servers: Server[];
}

export default function PoliciesWidget({ policies, servers }: PoliciesWidgetProps) {
  const { isOpen, openModal, closeModal } = useModal();
  const [selectedPolicy, setSelectedPolicy] = useState<UserPolicy | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    serverId: "",
    enableTranscoding: true,
    maxTranscodingBitrate: "",
    transcodingFormats: "",
    enableDownload: false,
    maxDownloadBitrate: "",
    maxStreamingBitrate: "",
    enableRemoteAccess: true,
    maxDevices: "",
    enableSchedule: false,
    scheduleStart: "",
    scheduleEnd: "",
    enableLiveTV: false,
    enableSync: false,
    enableCameraUpload: false,
  });

  const handleCreatePolicy = () => {
    setSelectedPolicy(null);
    setFormData({
      name: "",
      description: "",
      serverId: "",
      enableTranscoding: true,
      maxTranscodingBitrate: "",
      transcodingFormats: "",
      enableDownload: false,
      maxDownloadBitrate: "",
      maxStreamingBitrate: "",
      enableRemoteAccess: true,
      maxDevices: "",
      enableSchedule: false,
      scheduleStart: "",
      scheduleEnd: "",
      enableLiveTV: false,
      enableSync: false,
      enableCameraUpload: false,
    });
    openModal();
  };

  const handleEditPolicy = (policy: UserPolicy) => {
    setSelectedPolicy(policy);
    setFormData({
      name: policy.name,
      description: policy.description || "",
      serverId: policy.serverId || "",
      enableTranscoding: policy.enableTranscoding,
      maxTranscodingBitrate: policy.maxTranscodingBitrate?.toString() || "",
      transcodingFormats: policy.transcodingFormats || "",
      enableDownload: policy.enableDownload,
      maxDownloadBitrate: policy.maxDownloadBitrate?.toString() || "",
      maxStreamingBitrate: policy.maxStreamingBitrate?.toString() || "",
      enableRemoteAccess: policy.enableRemoteAccess,
      maxDevices: policy.maxDevices?.toString() || "",
      enableSchedule: policy.enableSchedule,
      scheduleStart: policy.scheduleStart || "",
      scheduleEnd: policy.scheduleEnd || "",
      enableLiveTV: policy.enableLiveTV,
      enableSync: policy.enableSync,
      enableCameraUpload: policy.enableCameraUpload,
    });
    openModal();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const url = selectedPolicy ? `/api/policies/${selectedPolicy.id}` : "/api/policies";
      const method = selectedPolicy ? "PUT" : "POST";
      
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          maxTranscodingBitrate: formData.maxTranscodingBitrate ? parseInt(formData.maxTranscodingBitrate) : null,
          maxDownloadBitrate: formData.maxDownloadBitrate ? parseInt(formData.maxDownloadBitrate) : null,
          maxStreamingBitrate: formData.maxStreamingBitrate ? parseInt(formData.maxStreamingBitrate) : null,
          maxDevices: formData.maxDevices ? parseInt(formData.maxDevices) : null,
          serverId: formData.serverId || null,
        }),
      });

      if (response.ok) {
        closeModal();
        window.location.reload();
      } else {
        const error = await response.json();
        alert(`Error: ${error.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al procesar la solicitud");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeletePolicy = async (policyId: string) => {
    if (!confirm("¿Estás seguro de que quieres eliminar esta política?")) {
      return;
    }

    try {
      const response = await fetch(`/api/policies/${policyId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        window.location.reload();
      } else {
        const error = await response.json();
        alert(`Error: ${error.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al eliminar la política");
    }
  };

  // Definir campos del formulario
  const formFields = [
    {
      id: "name",
      label: "Nombre de la Política",
      type: "text" as const,
      placeholder: "Política Estándar",
      required: true,
      value: formData.name,
      onChange: (value: string) => setFormData({ ...formData, name: value }),
      description: "Nombre descriptivo para identificar esta política",
    },
    {
      id: "description",
      label: "Descripción",
      type: "textarea" as const,
      placeholder: "Descripción de la política...",
      required: false,
      value: formData.description,
      onChange: (value: string) => setFormData({ ...formData, description: value }),
      rows: 3,
      description: "Descripción detallada de qué hace esta política",
    },
    {
      id: "serverId",
      label: "Servidor (Opcional)",
      type: "select" as const,
      required: false,
      value: formData.serverId,
      onChange: (value: string) => setFormData({ ...formData, serverId: value }),
      options: [
        { value: "", label: "Política Global (todos los servidores)" },
        ...servers.map((server) => ({
          value: server.id,
          label: `${server.name} (${server.baseUrl})`,
        })),
      ],
      description: "Si se especifica, la política solo aplicará a este servidor",
    },
    {
      id: "maxTranscodingBitrate",
      label: "Bitrate Máximo de Transcoding (kbps)",
      type: "text" as const,
      placeholder: "8000",
      required: false,
      value: formData.maxTranscodingBitrate,
      onChange: (value: string) => setFormData({ ...formData, maxTranscodingBitrate: value }),
      description: "Límite de bitrate para transcoding (dejar vacío para sin límite)",
    },
    {
      id: "maxDownloadBitrate",
      label: "Bitrate Máximo de Descarga (kbps)",
      type: "text" as const,
      placeholder: "15000",
      required: false,
      value: formData.maxDownloadBitrate,
      onChange: (value: string) => setFormData({ ...formData, maxDownloadBitrate: value }),
      description: "Límite de bitrate para descargas (dejar vacío para sin límite)",
    },
    {
      id: "maxStreamingBitrate",
      label: "Bitrate Máximo de Streaming (kbps)",
      type: "text" as const,
      placeholder: "10000",
      required: false,
      value: formData.maxStreamingBitrate,
      onChange: (value: string) => setFormData({ ...formData, maxStreamingBitrate: value }),
      description: "Límite de bitrate para streaming (dejar vacío para sin límite)",
    },
    {
      id: "maxDevices",
      label: "Máximo de Dispositivos Simultáneos",
      type: "text" as const,
      placeholder: "3",
      required: false,
      value: formData.maxDevices,
      onChange: (value: string) => setFormData({ ...formData, maxDevices: value }),
      description: "Número máximo de dispositivos que pueden usar la cuenta simultáneamente",
    },
    {
      id: "scheduleStart",
      label: "Hora de Inicio (HH:MM)",
      type: "text" as const,
      placeholder: "08:00",
      required: false,
      value: formData.scheduleStart,
      onChange: (value: string) => setFormData({ ...formData, scheduleStart: value }),
      description: "Hora de inicio del acceso (formato 24h, ej: 08:00)",
    },
    {
      id: "scheduleEnd",
      label: "Hora de Fin (HH:MM)",
      type: "text" as const,
      placeholder: "23:00",
      required: false,
      value: formData.scheduleEnd,
      onChange: (value: string) => setFormData({ ...formData, scheduleEnd: value }),
      description: "Hora de fin del acceso (formato 24h, ej: 23:00)",
    },
  ];

  return (
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-title-md2 font-semibold text-black dark:text-white">
            Políticas de Usuario
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Configura las políticas que se aplicarán a todos los usuarios
          </p>
          <div className="mt-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-xs text-blue-700 dark:text-blue-300">
              <strong>Nota:</strong> El tiempo de acceso se gestiona mediante el sistema de créditos al crear cada cuenta (1 crédito = 1 mes de acceso). 
              Las políticas aquí configuradas son fijas y se aplican a todos los usuarios.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button
            onClick={handleCreatePolicy}
            startIcon={<PlusIcon />}
          >
            Crear Política
          </Button>
        </div>
      </div>

      {/* Estadísticas rápidas */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Total Políticas
              </p>
              <p className="text-2xl font-bold text-black dark:text-white">
                {policies.length}
              </p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
              <PageIcon />
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Políticas Globales
              </p>
              <p className="text-2xl font-bold text-black dark:text-white">
                {policies.filter(p => !p.serverId).length}
              </p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
              <BoxCubeIcon />
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Políticas por Servidor
              </p>
              <p className="text-2xl font-bold text-black dark:text-white">
                {policies.filter(p => p.serverId).length}
              </p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900">
              <CheckCircleIcon />
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Con Horarios
              </p>
              <p className="text-2xl font-bold text-black dark:text-white">
                {policies.filter(p => p.enableSchedule).length}
              </p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
              <TimeIcon />
            </div>
          </div>
        </div>
      </div>

      {/* Lista de políticas */}
      <div className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="px-6 py-4">
          <h3 className="text-lg font-semibold text-black dark:text-white">
            Políticas Configuradas
          </h3>
        </div>
        
        {policies.length === 0 ? (
          <div className="p-6 text-center">
            <p className="text-gray-500 dark:text-gray-400">
              No hay políticas configuradas. Crea una política para comenzar.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                    Nombre
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                    Servidor
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                    Transcoding
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                    Descargas
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                    Dispositivos
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                    Carga de Cámara
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                {policies.map((policy) => (
                  <tr key={policy.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-black dark:text-white">
                          {policy.name}
                        </div>
                        {policy.description && (
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {policy.description}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-gray-300">
                        {policy.server ? (
                          <div>
                            <div className="font-medium">{policy.server.name}</div>
                            <div className="text-xs text-gray-500">{policy.server.baseUrl}</div>
                          </div>
                        ) : (
                          <span className="text-blue-600 dark:text-blue-400 font-medium">Global</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-gray-300">
                        {policy.enableTranscoding ? (
                          <div>
                            <div className="text-green-600 dark:text-green-400">✓ Habilitado</div>
                            {policy.maxTranscodingBitrate && (
                              <div className="text-xs text-gray-500">
                                Max: {policy.maxTranscodingBitrate} kbps
                              </div>
                            )}
                          </div>
                        ) : (
                          <span className="text-red-600 dark:text-red-400">✗ Deshabilitado</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-gray-300">
                        {policy.enableDownload ? (
                          <div>
                            <div className="text-green-600 dark:text-green-400">✓ Habilitado</div>
                            {policy.maxDownloadBitrate && (
                              <div className="text-xs text-gray-500">
                                Max: {policy.maxDownloadBitrate} kbps
                              </div>
                            )}
                          </div>
                        ) : (
                          <span className="text-red-600 dark:text-red-400">✗ Deshabilitado</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-gray-300">
                        {policy.maxDevices ? (
                          <span>{policy.maxDevices} dispositivos</span>
                        ) : (
                          <span className="text-gray-500">Sin límite</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-gray-300">
                        {policy.enableCameraUpload ? (
                          <span className="text-green-600 dark:text-green-400">✓ Habilitado</span>
                        ) : (
                          <span className="text-red-600 dark:text-red-400">✗ Deshabilitado</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleEditPolicy(policy)}
                          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                          title="Editar política"
                        >
                          <PencilIcon />
                        </button>
                        <button
                          onClick={() => handleDeletePolicy(policy.id)}
                          className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                          title="Eliminar política"
                        >
                          <TrashBinIcon />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal de creación/edición */}
      <FormModal
        isOpen={isOpen}
        onClose={closeModal}
        title={selectedPolicy ? "Editar Política" : "Crear Nueva Política"}
        fields={formFields}
        onSubmit={handleSubmit}
        submitText={selectedPolicy ? "Actualizar Política" : "Crear Política"}
        isSubmitting={isSubmitting}
        icon={<PageIcon />}
        description={selectedPolicy ? "Modifica la configuración de la política" : "Crea una nueva política para aplicar a los usuarios"}
      >
        {/* Checkboxes para configuraciones booleanas */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-center space-x-3">
              <input
                id="enableTranscoding"
                type="checkbox"
                checked={formData.enableTranscoding}
                onChange={(e) =>
                  setFormData({ ...formData, enableTranscoding: e.target.checked })
                }
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <Label htmlFor="enableTranscoding" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Habilitar Transcoding
              </Label>
            </div>

            <div className="flex items-center space-x-3">
              <input
                id="enableDownload"
                type="checkbox"
                checked={formData.enableDownload}
                onChange={(e) =>
                  setFormData({ ...formData, enableDownload: e.target.checked })
                }
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <Label htmlFor="enableDownload" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Habilitar Descargas
              </Label>
            </div>

            <div className="flex items-center space-x-3">
              <input
                id="enableRemoteAccess"
                type="checkbox"
                checked={formData.enableRemoteAccess}
                onChange={(e) =>
                  setFormData({ ...formData, enableRemoteAccess: e.target.checked })
                }
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <Label htmlFor="enableRemoteAccess" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Acceso Remoto
              </Label>
            </div>

            <div className="flex items-center space-x-3">
              <input
                id="enableSchedule"
                type="checkbox"
                checked={formData.enableSchedule}
                onChange={(e) =>
                  setFormData({ ...formData, enableSchedule: e.target.checked })
                }
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <Label htmlFor="enableSchedule" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Restricción de Horarios
              </Label>
            </div>

            <div className="flex items-center space-x-3">
              <input
                id="enableLiveTV"
                type="checkbox"
                checked={formData.enableLiveTV}
                onChange={(e) =>
                  setFormData({ ...formData, enableLiveTV: e.target.checked })
                }
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <Label htmlFor="enableLiveTV" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Habilitar Live TV
              </Label>
            </div>

            <div className="flex items-center space-x-3">
              <input
                id="enableSync"
                type="checkbox"
                checked={formData.enableSync}
                onChange={(e) =>
                  setFormData({ ...formData, enableSync: e.target.checked })
                }
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <Label htmlFor="enableSync" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Habilitar Sincronización
              </Label>
            </div>

            <div className="flex items-center space-x-3">
              <input
                id="enableCameraUpload"
                type="checkbox"
                checked={formData.enableCameraUpload}
                onChange={(e) =>
                  setFormData({ ...formData, enableCameraUpload: e.target.checked })
                }
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <Label htmlFor="enableCameraUpload" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Permitir Carga de Cámara
              </Label>
            </div>
          </div>
        </div>
      </FormModal>
    </div>
  );
}
