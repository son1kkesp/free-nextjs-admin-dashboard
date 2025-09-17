"use client";

import React, { useState } from "react";
import Button from "@/components/ui/button/Button";
import FormModal from "@/components/form/FormModal";
import EmbyLibraryManager from "@/components/form/EmbyLibraryManager";
import { useModal } from "@/hooks/useModal";
import { formatDate } from "@/lib/date-utils";
import { 
  BoxCubeIcon, 
  PlusIcon, 
  PencilIcon, 
  TrashBinIcon, 
  CheckCircleIcon,
  FolderIcon
} from "@/icons/index";

interface Library {
  id: string;
  name: string;
  embyId: string;
  packageId: string;
}

interface Server {
  id: string;
  name: string;
  baseUrl: string;
}

interface Package {
  id: string;
  name: string;
  description: string | null;
  serverId: string;
  createdAt: Date;
  updatedAt: Date;
  libraries: Library[];
  server: Server;
}

interface PackagesWidgetProps {
  packages: Package[];
  servers: Server[];
}

export default function PackagesWidget({ packages, servers }: PackagesWidgetProps) {
  const { isOpen, openModal, closeModal } = useModal();
  const [editingPackage, setEditingPackage] = useState<Package | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    serverId: "",
  });

  const [libraries, setLibraries] = useState<Library[]>([]);

  const handleCreatePackage = () => {
    setEditingPackage(null);
    setFormData({ name: "", description: "", serverId: "" });
    setLibraries([]);
    openModal();
  };

  const handleEditPackage = (pkg: Package) => {
    setEditingPackage(pkg);
    setFormData({
      name: pkg.name,
      description: pkg.description || "",
      serverId: pkg.serverId,
    });
    setLibraries(pkg.libraries);
    openModal();
  };

  const handleDeletePackage = async (packageId: string) => {
    if (!confirm("¿Estás seguro de que quieres eliminar este paquete?")) return;

    try {
      const response = await fetch(`/api/packages/${packageId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        window.location.reload();
      } else {
        alert("Error al eliminar el paquete");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al eliminar el paquete");
    }
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const url = editingPackage ? `/api/packages/${editingPackage.id}` : "/api/packages";
      const method = editingPackage ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          libraries,
        }),
      });

      if (response.ok) {
        closeModal();
        window.location.reload();
      } else {
        const errorData = await response.json();
        alert(errorData.error || "Error al guardar el paquete");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al guardar el paquete");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Definir campos del formulario
  const formFields = [
    {
      id: "name",
      label: "Nombre del Paquete",
      type: "text" as const,
      placeholder: "Ej: Paquete Premium",
      required: true,
      value: formData.name,
      onChange: (value: string) => setFormData({ ...formData, name: value }),
      description: "Un nombre descriptivo para identificar este paquete de librerías",
    },
    {
      id: "description",
      label: "Descripción",
      type: "textarea" as const,
      placeholder: "Describe qué incluye este paquete...",
      required: false,
      value: formData.description,
      onChange: (value: string) => setFormData({ ...formData, description: value }),
      rows: 3,
      description: "Información adicional sobre el paquete (opcional)",
    },
    {
      id: "serverId",
      label: "Servidor Emby",
      type: "select" as const,
      required: true,
      value: formData.serverId,
      onChange: (value: string) => setFormData({ ...formData, serverId: value }),
      options: [
        { value: "", label: "Seleccionar servidor" },
        ...servers.map(server => ({
          value: server.id,
          label: server.name
        }))
      ],
      description: "Selecciona el servidor Emby al que pertenece este paquete",
    },
  ];

  return (
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-title-md2 font-semibold text-black dark:text-white">
            Paquetes de Librerías
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Gestiona los paquetes de librerías para cada servidor
          </p>
        </div>
        <Button
          onClick={handleCreatePackage}
          startIcon={<PlusIcon />}
        >
          Agregar Paquete
        </Button>
      </div>

      {/* Estadísticas */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Total Paquetes</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{packages.length}</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
              <BoxCubeIcon />
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Total Librerías</p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                {packages.reduce((acc, pkg) => acc + pkg.libraries.length, 0)}
              </p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
              <FolderIcon />
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Servidores Activos</p>
              <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {new Set(packages.map(pkg => pkg.serverId)).size}
              </p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
              <CheckCircleIcon />
            </div>
          </div>
        </div>
      </div>

      {/* Lista de Paquetes */}
      <div className="rounded-sm border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="px-4 py-6 md:px-6 xl:px-7.5">
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Lista de Paquetes
          </h4>
        </div>

        {packages.length === 0 ? (
          <div className="px-4 py-8 text-center md:px-6 xl:px-7.5">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 mx-auto mb-4">
              <BoxCubeIcon />
            </div>
            <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
              No hay paquetes
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Comienza creando tu primer paquete de librerías
            </p>
            <Button
              onClick={handleCreatePackage}
              startIcon={<PlusIcon />}
            >
              Agregar Paquete
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 p-4 md:px-6 xl:px-7.5">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                      {pkg.name}
                    </h3>
                    {pkg.description && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {pkg.description}
                      </p>
                    )}
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <strong>Servidor:</strong> {pkg.server.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <strong>Librerías:</strong> {pkg.libraries.length}
                    </p>
                    {pkg.libraries.length > 0 && (
                      <div className="mt-2">
                        <p className="text-xs text-gray-500 dark:text-gray-500 mb-1">Librerías incluidas:</p>
                        <div className="flex flex-wrap gap-1">
                          {pkg.libraries.slice(0, 3).map((lib) => (
                            <span
                              key={lib.id}
                              className="inline-block rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                            >
                              {lib.name}
                            </span>
                          ))}
                          {pkg.libraries.length > 3 && (
                            <span className="inline-block rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                              +{pkg.libraries.length - 3} más
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                      Creado: {formatDate(pkg.createdAt)}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleEditPackage(pkg)}
                      variant="outline"
                      startIcon={<PencilIcon />}
                    >
                      Editar
                    </Button>
                    <Button
                      onClick={() => handleDeletePackage(pkg.id)}
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

      {/* Modal para crear/editar paquete */}
      <FormModal
        isOpen={isOpen}
        onClose={closeModal}
        title={editingPackage ? "Editar Paquete" : "Agregar Paquete"}
        fields={formFields}
        onSubmit={handleSubmit}
        submitText={editingPackage ? "Actualizar Paquete" : "Crear Paquete"}
        isSubmitting={isSubmitting}
        icon={<BoxCubeIcon />}
        description={editingPackage ? "Modifica la información del paquete y sus librerías" : "Crea un nuevo paquete de librerías para tus usuarios"}
      >
        <EmbyLibraryManager
          serverId={formData.serverId}
          libraries={libraries}
          onLibrariesChange={setLibraries}
        />
      </FormModal>
    </div>
  );
}
