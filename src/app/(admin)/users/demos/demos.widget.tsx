"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Button from "@/components/ui/button/Button";
import FormModal from "@/components/form/FormModal";
import Label from "@/components/form/Label";
import Select from "@/components/form/Select";
import { useModal } from "@/hooks/useModal";
import { useServerStats } from "@/hooks/useServerStats";
import { ConvertDemoModal } from "@/components/modals/ConvertDemoModal";
import { formatDate } from "@/lib/date-utils";
import { 
  UserCircleIcon, 
  PlusIcon, 
  PencilIcon, 
  TrashBinIcon, 
  EyeIcon, 
  DownloadIcon,
  TimeIcon,
  ArrowUpIcon
} from "@/icons/index";
import DemoCard from "@/components/cards/DemoCard";

interface Demo {
  id: string;
  embyUserId: string;
  embyUsername: string;
  createdAt: Date;
  embyUser: {
    id: string;
    email: string;
    name: string | null;
  };
  server: {
    id: string;
    name: string;
    baseUrl: string;
  };
  userServerLink?: {
    id: string;
    demoHours: number | null;
    isDemo: boolean;
    expireAt: Date | null;
    createdAt: Date;
  };
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
  libraries: {
    id: string;
    libraryId: string | null;
    libraryName: string | null;
  }[];
}

interface DemosWidgetProps {
  demos: Demo[];
  servers: Server[];
  packages: Package[];
}

export default function DemosWidget({ demos, servers, packages }: DemosWidgetProps) {
  const { isOpen, openModal, closeModal } = useModal();
  const [convertModalOpen, setConvertModalOpen] = useState(false);
  const [selectedDemo, setSelectedDemo] = useState<Demo | null>(null);
  const { serverStats } = useServerStats();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userDomain, setUserDomain] = useState<string>("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    serverId: "AUTO", // Por defecto AUTO
    packageId: "",
    demoHours: "24", // Por defecto 24 horas
  });

  // Cargar el dominio del usuario al montar el componente
  useEffect(() => {
    const fetchUserDomain = async () => {
      try {
        const response = await fetch("/api/settings/domain");
        if (response.ok) {
          const data = await response.json();
          setUserDomain(data.user?.defaultDomain || "");
        }
      } catch (error) {
        console.error("Error fetching user domain:", error);
      }
    };
    fetchUserDomain();
  }, []);

  // Generar email aleatorio
  const generateRandomEmail = useCallback(() => {
    const randomLetter = String.fromCharCode(97 + Math.floor(Math.random() * 26)); // a-z
    const randomNumber = Math.floor(Math.random() * 1000).toString().padStart(3, '0'); // 000-999
    const domain = userDomain || "example.com";
    const email = `demo${randomLetter}${randomNumber}@${domain}`;
    return email;
  }, [userDomain]);

  // Generar contraseña aleatoria
  const generateRandomPassword = useCallback(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let password = "";
    for (let i = 0; i < 8; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }, []);

  const handleCreateDemo = () => {
    setSelectedDemo(null);
    setFormData({
      email: "",
      password: "",
      serverId: "AUTO", // Por defecto AUTO
      packageId: "",
      demoHours: "24", // Por defecto 24 horas
    });
    openModal();
  };

  const handleEditDemo = (demo: Demo) => {
    setSelectedDemo(demo);
    setFormData({
      email: demo.embyUser.email,
      password: "",
      serverId: demo.server.id,
      packageId: "",
      demoHours: "24", // Las demos suelen ser de 24 horas
    });
    openModal();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const url = selectedDemo ? `/api/server-users/${selectedDemo.id}` : "/api/server-users";
      const method = selectedDemo ? "PUT" : "POST";
      
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          demoHours: parseInt(formData.demoHours) || 24,
          isDemo: true, // Marcar como demo
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

  // Definir campos del formulario
  const formFields = [
    {
      id: "email",
      label: "Email",
      type: "email" as const,
      placeholder: userDomain ? `demo@${userDomain}` : "demo@ejemplo.com",
      required: true,
      value: formData.email,
      onChange: (value: string) => setFormData({ ...formData, email: value }),
      description: userDomain ? `Email con dominio ${userDomain}` : "Dirección de correo electrónico para la demo",
      generateButton: {
        onClick: () => {
          const newEmail = generateRandomEmail();
          setFormData({ ...formData, email: newEmail });
        },
        label: "Generar email aleatorio",
      },
    },
    {
      id: "password",
      label: selectedDemo ? "Nueva Contraseña (Opcional)" : "Contraseña",
      type: "password" as const,
      placeholder: "••••••••",
      required: !selectedDemo,
      value: formData.password,
      onChange: (value: string) => setFormData({ ...formData, password: value }),
      description: selectedDemo ? "Deja vacío para mantener la contraseña actual" : "Contraseña para acceder a la demo",
      generateButton: {
        onClick: () => {
          const newPassword = generateRandomPassword();
          setFormData({ ...formData, password: newPassword });
        },
        label: "Generar contraseña aleatoria",
      },
    },
    {
      id: "serverId",
      label: "Servidor Emby",
      type: "select" as const,
      required: true,
      value: formData.serverId,
      onChange: (value: string) => setFormData({ ...formData, serverId: value }),
      options: servers.map((server) => {
        const stats = serverStats.find(s => s.id === server.id);
        const currentUsers = stats?.currentUsers || 0;
        const maxUsers = server.maxUsers || 100;
        return {
          value: server.id,
          label: `${server.name} (${currentUsers}/${maxUsers})`,
        };
      }),
      description: "Servidor Emby donde se creará la cuenta demo",
      generateButton: {
        onClick: () => {
          const serversWithStats = servers.map(server => {
            const stats = serverStats.find(s => s.id === server.id);
            const currentUsers = stats?.currentUsers || 0;
            const maxUsers = server.maxUsers || 100;
            const fillPercentage = (currentUsers / maxUsers) * 100;
            
            return {
              ...server,
              currentUsers,
              maxUsers,
              fillPercentage
            };
          });

          // Ordenar por porcentaje de llenado (menos lleno primero para demos)
          serversWithStats.sort((a, b) => a.fillPercentage - b.fillPercentage);
          
          if (serversWithStats.length > 0) {
            const selectedServer = serversWithStats[0];
            setFormData({ 
              ...formData, 
              serverId: selectedServer.id
            });
          }
        },
        label: "AUTO - Servidor menos lleno",
      },
    },
    {
      id: "packageId",
      label: "Paquete de Librerías",
      type: "select" as const,
      required: false,
      value: formData.packageId,
      onChange: (value: string) => setFormData({ ...formData, packageId: value }),
      options: packages.map((pkg) => ({
        value: pkg.id,
        label: pkg.name,
      })),
      description: "Paquete de librerías que tendrá acceso la demo",
    },
    {
      id: "demoHours",
      label: "Horas de Demo",
      type: "text" as const,
      placeholder: "24",
      required: true,
      value: formData.demoHours,
      onChange: (value: string) => setFormData({ ...formData, demoHours: value }),
      description: "Número de horas de acceso para la demo (máximo 24 horas)",
    },
  ];


  const handleDeleteDemo = async (demoId: string) => {
    if (!confirm("¿Estás seguro de que quieres eliminar esta demo?")) {
      return;
    }

    try {
      const response = await fetch(`/api/server-users/${demoId}`, {
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
      alert("Error al eliminar la demo");
    }
  };

  const handleConvertToUser = (demo: Demo) => {
    // Validar que la demo tenga los datos necesarios
    if (!demo || !demo.embyUser || !demo.embyUser.email) {
      console.error('Demo data is incomplete:', demo);
      alert('Error: Los datos de la demo están incompletos');
      return;
    }
    
    setSelectedDemo(demo);
    setConvertModalOpen(true);
  };

  const handleConvertSuccess = () => {
    window.location.reload();
  };


  const handleExportCSV = () => {
    const csvContent = [
      ["Email", "Usuario Emby", "Servidor", "Creado", "Tipo"],
      ...demos.map(demo => [
        demo.embyUser.email,
        demo.embyUsername,
        demo.server.name,
        formatDate(demo.createdAt),
        "Demo",
      ])
    ].map(row => row.join(",")).join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "demos-usuarios.csv";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-title-md2 font-semibold text-black dark:text-white">
            Cuentas Demo
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Gestiona las cuentas temporales (máximo 24 horas) para pruebas
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={handleExportCSV}
            variant="outline"
            startIcon={<DownloadIcon />}
          >
            Exportar CSV
          </Button>
          <Button
            onClick={handleCreateDemo}
            startIcon={<PlusIcon />}
          >
            Crear Demo
          </Button>
        </div>
      </div>

      {/* Estadísticas rápidas */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Total Demos</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{demos.length}</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
              <UserCircleIcon />
            </div>
          </div>
        </div>
      </div>

      {/* Lista visual de demos */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Lista de Cuentas Demo
          </h4>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {demos.length} demo{demos.length !== 1 ? 's' : ''}
          </div>
        </div>

        {demos.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <UserCircleIcon />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              No hay demos
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Comienza creando tu primera cuenta demo
            </p>
            <Button
              onClick={handleCreateDemo}
              startIcon={<PlusIcon />}
            >
              Crear Demo
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {demos.map((demo) => (
              <DemoCard
                key={demo.id}
                demo={demo}
                onEdit={handleEditDemo}
                onConvert={handleConvertToUser}
                onDelete={handleDeleteDemo}
                isMobile={false}
              />
            ))}
          </div>
        )}
      </div>


      {/* Modal de creación/edición */}
      <FormModal
        isOpen={isOpen}
        onClose={closeModal}
        title={selectedDemo ? "Modificar Demo" : "Crear Demo de Usuario"}
        fields={formFields}
        onSubmit={handleSubmit}
        submitText={selectedDemo ? "Actualizar Demo" : "Crear Demo"}
        isSubmitting={isSubmitting}
        icon={<UserCircleIcon />}
        description={selectedDemo ? "Modifica la información de la demo" : "Crea una cuenta demo temporal (máximo 24 horas) para que los usuarios prueben el servicio"}
      >
      </FormModal>

      {/* Modal de conversión de demo */}
      <ConvertDemoModal
        isOpen={convertModalOpen}
        onClose={() => {
          setConvertModalOpen(false);
          setSelectedDemo(null);
        }}
        demo={selectedDemo}
        onSuccess={handleConvertSuccess}
      />
    </div>
  );
}
