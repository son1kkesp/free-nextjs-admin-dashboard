"use client";

import React, { useState } from "react";
import Button from "@/components/ui/button/Button";
import FormModal from "@/components/form/FormModal";
import Label from "@/components/form/Label";
import Select from "@/components/form/Select";
import { useModal } from "@/hooks/useModal";
import { useServerStats } from "@/hooks/useServerStats";
import { formatDate } from "@/lib/date-utils";
import { UserCircleIcon, PlusIcon, PencilIcon, TrashBinIcon, EyeIcon, DownloadIcon, CheckCircleIcon, BoxCubeIcon, ArrowUpIcon } from "@/icons/index";
import { UsersTable } from "@/components/tables/UsersTable";

interface ServerUser {
  id: string;
  userId: string;
  serverId: string;
  isDemo: boolean;
  expirationDate: Date | null;
  creditType: string;
  credits: number;
  createdAt: Date;
  updatedAt: Date;
  server: {
    id: string;
    name: string;
    url: string;
  };
  // Esta es la estructura real que viene de UserServerLink
  embyUserEmail?: string;
  embyUserName?: string;
}

interface Server {
  id: string;
  name: string;
  url: string;
}

interface Package {
  id: string;
  name: string;
  description: string | null;
  libraries: {
    library: {
      id: string;
      serverId: string;
    };
  }[];
}

interface ServerUsersWidgetProps {
  serverUsers: ServerUser[];
  servers: Server[];
  packages: Package[];
}

export default function ServerUsersWidget({ serverUsers, servers, packages }: ServerUsersWidgetProps) {
  const { isOpen, openModal, closeModal } = useModal();
  const { serverStats } = useServerStats();
  const [selectedUser, setSelectedUser] = useState<ServerUser | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  

  // Los usuarios se pasan directamente a la tabla que maneja su propio filtrado
  const filteredAndSortedUsers = React.useMemo(() => {
    return serverUsers;
  }, [serverUsers]);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    serverId: "", // Servidor seleccionado
    packageId: "", // Paquete del servidor seleccionado
    creditsAllocated: "1", // Por defecto 1 crédito
    creditType: "ONE_CONNECTION",
    expirationDate: "", // Fecha de expiración para edición
  });

  const handleCreateUser = () => {
    setSelectedUser(null);
    setFormData({
      email: "",
      password: "",
      serverId: "", // Servidor seleccionado
      packageId: "", // Paquete del servidor seleccionado
      creditsAllocated: "1", // Por defecto 1 crédito
      creditType: "ONE_CONNECTION",
      expirationDate: "",
    });
    openModal();
  };

  const handleEditUser = (user: ServerUser) => {
    setSelectedUser(user);
    
    // Formatear la fecha de expiración para el input date
    let expirationDateFormatted = "";
    if (user.expirationDate) {
      const date = new Date(user.expirationDate);
      expirationDateFormatted = date.toISOString().split('T')[0]; // Formato YYYY-MM-DD
    }
    
    setFormData({
      email: user.embyUserEmail || '',
      password: "",
      serverId: user.server.id,
      packageId: "",
      creditsAllocated: user.credits.toString(),
      creditType: user.creditType,
      expirationDate: expirationDateFormatted,
    });
    openModal();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const url = selectedUser ? `/api/server-users/${selectedUser.id}` : "/api/server-users";
      const method = selectedUser ? "PUT" : "POST";
      
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          serverId: formData.serverId,
          packageId: formData.packageId,
          creditsAllocated: parseInt(formData.creditsAllocated) || 0,
          creditType: formData.creditType,
          expirationDate: formData.expirationDate || null,
          isDemo: false, // Siempre false para usuarios regulares
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

  // Calcular fecha de expiración basada en créditos
  const calculateExpirationDate = () => {
    const credits = parseInt(formData.creditsAllocated) || 0;
    if (credits > 0) {
      const monthsInMilliseconds = credits * 30 * 24 * 60 * 60 * 1000; // 30 días por mes
      return new Date(Date.now() + monthsInMilliseconds);
    }
    return null;
  };

  // Filtrar paquetes según el servidor seleccionado
  const getAvailablePackages = () => {
    if (!formData.serverId) return [];
    
    const selectedServer = servers.find(s => s.id === formData.serverId);
    if (!selectedServer) return [];
    
    // Filtrar paquetes que tienen librerías en el servidor seleccionado
    return packages.filter(pkg => 
      pkg.libraries && pkg.libraries.some(pkgLib => pkgLib.library.serverId === formData.serverId)
    );
  };

  // Definir campos del formulario para crear usuario
  const createUserFields = [
    {
      id: "email",
      label: "Email",
      type: "email" as const,
      placeholder: "usuario@ejemplo.com",
      required: true,
      value: formData.email,
      onChange: (value: string) => setFormData({ ...formData, email: value }),
      description: "Dirección de correo electrónico del usuario (se usará como nombre en Emby)",
      generateButton: {
        onClick: () => {
          const letters = 'abcdefghijklmnopqrstuvwxyz';
          const numbers = '0123456789';
          const randomLetter = letters[Math.floor(Math.random() * letters.length)];
          const randomNumbers = Array.from({ length: 3 }, () => numbers[Math.floor(Math.random() * numbers.length)]).join('');
          const domain = 'streamcloud.com';
          const randomEmail = `user${randomLetter}${randomNumbers}@${domain}`;
          setFormData({ ...formData, email: randomEmail });
        },
        label: "Generar email aleatorio",
      },
    },
    {
      id: "password",
      label: selectedUser ? "Nueva Contraseña (Opcional)" : "Contraseña",
      type: "password" as const,
      placeholder: "••••••••",
      required: !selectedUser,
      value: formData.password,
      onChange: (value: string) => setFormData({ ...formData, password: value }),
      description: selectedUser ? "Deja vacío para mantener la contraseña actual" : "Contraseña para acceder al servidor Emby",
      generateButton: {
        onClick: () => {
          const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          let password = '';
          for (let i = 0; i < 8; i++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length));
          }
          setFormData({ ...formData, password: password });
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
      onChange: (value: string) => setFormData({ 
        ...formData, 
        serverId: value,
        packageId: "" // Limpiar paquete cuando se cambia servidor
      }),
      options: servers.map((server) => {
        const stats = Array.isArray(serverStats) ? serverStats.find(s => s.id === server.id) : null;
        const currentUsers = stats?.currentUsers || 0;
        const maxUsers = server.maxUsers || 100;
        return {
          value: server.id,
          label: `${server.name} (${currentUsers}/${maxUsers})`,
        };
      }),
      description: "Selecciona el servidor Emby para este usuario",
      generateButton: {
        onClick: () => {
          const serversWithStats = servers.map(server => {
            const stats = Array.isArray(serverStats) ? serverStats.find(s => s.id === server.id) : null;
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

          // Ordenar por porcentaje de llenado (más lleno primero)
          serversWithStats.sort((a, b) => b.fillPercentage - a.fillPercentage);
          
          if (serversWithStats.length > 0) {
            const selectedServer = serversWithStats[0];
            setFormData({ 
              ...formData, 
              serverId: selectedServer.id,
              packageId: "" // Limpiar paquete cuando se cambia servidor
            });
          }
        },
        label: "AUTO - Servidor más lleno",
      },
    },
    {
      id: "packageId",
      label: "Paquete de Librerías",
      type: "select" as const,
      required: false,
      value: formData.packageId,
      onChange: (value: string) => setFormData({ ...formData, packageId: value }),
      options: [
        { value: "", label: "Sin paquete" },
        ...getAvailablePackages().map((pkg) => ({
          value: pkg.id,
          label: pkg.name,
        })),
      ],
      description: "Paquete de librerías disponibles para el servidor seleccionado",
    },
    {
      id: "creditsAllocated",
      label: "Créditos Asignados",
      type: "text" as const,
      placeholder: "1",
      required: true,
      value: formData.creditsAllocated,
      onChange: (value: string) => setFormData({ ...formData, creditsAllocated: value }),
      description: "Número de meses de acceso (1 crédito = 1 mes de acceso). Ejemplo: 2 créditos = 2 meses de acceso.",
    },
    {
      id: "creditType",
      label: "Tipo de Crédito",
      type: "select" as const,
      required: true,
      value: formData.creditType,
      onChange: (value: string) => setFormData({ ...formData, creditType: value }),
      options: [
        { value: "1_CONNECTION", label: "1 Conexión Simultánea (Básico)" },
        { value: "2_CONNECTIONS", label: "2 Conexiones Simultáneas (Premium)" },
      ],
      description: "Número de dispositivos que pueden conectarse simultáneamente. Ambos tipos dan la misma duración de acceso.",
    },
  ];

  // Campos específicos para editar usuario (solo fecha de expiración, tipo de créditos y contraseña)
  const editUserFields = [
    {
      id: "expirationDate",
      label: "Fecha de Expiración",
      type: "date" as const,
      required: true,
      value: formData.expirationDate || "",
      onChange: (value: string) => setFormData({ ...formData, expirationDate: value }),
      description: "Fecha hasta la cual el usuario tendrá acceso",
    },
    {
      id: "creditType",
      label: "Tipo de Crédito",
      type: "select" as const,
      required: true,
      value: formData.creditType,
      onChange: (value: string) => setFormData({ ...formData, creditType: value }),
      options: [
        { value: "ONE_CONNECTION", label: "1 Conexión Simultánea (Básico)" },
        { value: "TWO_CONNECTIONS", label: "2 Conexiones Simultáneas (Premium)" },
      ],
      description: "Número de dispositivos que pueden conectarse simultáneamente",
    },
    {
      id: "password",
      label: "Nueva Contraseña (Opcional)",
      type: "password" as const,
      placeholder: "••••••••",
      required: false,
      value: formData.password,
      onChange: (value: string) => setFormData({ ...formData, password: value }),
      description: "Deja vacío para mantener la contraseña actual",
      generateButton: {
        onClick: () => {
          const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          let password = '';
          for (let i = 0; i < 8; i++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length));
          }
          setFormData({ ...formData, password: password });
        },
        label: "Generar contraseña aleatoria",
      },
    },
  ];

  // Determinar qué campos usar según el modo
  const formFields = selectedUser ? editUserFields : createUserFields;

  const handleDeleteUser = async (userId: string) => {
    if (!confirm("¿Estás seguro de que quieres eliminar este usuario del servidor?")) {
      return;
    }

    try {
      const response = await fetch(`/api/server-users/${userId}`, {
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
      alert("Error al eliminar el usuario");
    }
  };

  const handleToggleActive = async (userId: string) => {
    try {
      const response = await fetch(`/api/server-users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isActive: false, // Por ahora solo desactivar
        }),
      });

      if (response.ok) {
        window.location.reload();
      } else {
        const error = await response.json();
        alert(`Error: ${error.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al cambiar el estado del usuario");
    }
  };

  const handleRenewCredits = async (userId: string) => {
    const creditsToAdd = prompt("¿Cuántos créditos quieres agregar? (1 crédito = 1 mes de acceso)");
    if (!creditsToAdd || isNaN(Number(creditsToAdd)) || Number(creditsToAdd) <= 0) {
      alert("Por favor ingresa un número válido de créditos");
      return;
    }

    const creditType = prompt("¿Qué tipo de crédito? (1 para 1 conexión, 2 para 2 conexiones)");
    if (!creditType || !["1", "2"].includes(creditType)) {
      alert("Por favor selecciona 1 o 2");
      return;
    }

    const creditTypeValue = creditType === "1" ? "1_CONNECTION" : "2_CONNECTIONS";

    try {
      const response = await fetch(`/api/server-users/${userId}/renew`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          creditsToAdd: Number(creditsToAdd),
          creditType: creditTypeValue,
        }),
      });

      if (response.ok) {
        alert(`✅ Créditos renovados exitosamente! Se agregaron ${creditsToAdd} créditos.`);
        window.location.reload();
      } else {
        const error = await response.json();
        alert(`Error: ${error.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al renovar créditos");
    }
  };


  const handleExportCSV = () => {
    const csvContent = [
      ["Email", "Usuario Emby", "Servidor", "Creado"],
      ...serverUsers.map(user => [
        user.embyUserEmail || '',
        user.embyUserName || '',
        user.server.name,
        formatDate(user.createdAt),
      ])
    ].map(row => row.join(",")).join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "usuarios-servidores.csv";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-title-md2 font-semibold text-black dark:text-white">
            Lista de Usuarios
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Gestiona las cuentas de usuario
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
            onClick={handleCreateUser}
            startIcon={<PlusIcon />}
          >
            Crear Usuario
          </Button>
        </div>
      </div>

      {/* Estadísticas minimalistas */}
      <div className="mb-6 flex flex-wrap items-center gap-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-blue-500"></div>
          <span className="text-sm text-gray-600 dark:text-gray-400">Total:</span>
          <span className="font-semibold text-gray-900 dark:text-white">{filteredAndSortedUsers.length}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
          <span className="text-sm text-gray-600 dark:text-gray-400">Activos:</span>
          <span className="font-semibold text-green-600 dark:text-green-400">
            {filteredAndSortedUsers.filter(user => {
              if (!user.expirationDate) return false;
              const isExpired = new Date(user.expirationDate) < new Date();
              return !isExpired;
            }).length}
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
          <span className="text-sm text-gray-600 dark:text-gray-400">Casi expirados:</span>
          <span className="font-semibold text-yellow-600 dark:text-yellow-400">
            {filteredAndSortedUsers.filter(user => {
              if (!user.expirationDate) return false;
              
              const expireDate = new Date(user.expirationDate);
              const now = new Date();
              const diffTime = expireDate.getTime() - now.getTime();
              const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
              
              // Casi expirados: menos de 5 días pero aún no expirados
              return diffDays <= 5 && diffDays > 0;
            }).length}
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-red-500"></div>
          <span className="text-sm text-gray-600 dark:text-gray-400">Expirados:</span>
          <span className="font-semibold text-red-600 dark:text-red-400">
            {filteredAndSortedUsers.filter(user => {
              if (!user.expirationDate) return false;
              return new Date(user.expirationDate) < new Date();
            }).length}
          </span>
        </div>
        
      </div>


      {/* Tabla de usuarios */}
      <UsersTable
        users={filteredAndSortedUsers}
        servers={servers}
        onEdit={handleEditUser}
        onDelete={handleDeleteUser}
        onRenew={handleRenewCredits}
      />

      {/* Modal de creación/edición */}
      <FormModal
        isOpen={isOpen}
        onClose={closeModal}
        title={selectedUser ? "Editar Usuario" : "Crear Usuario de Servidor"}
        fields={formFields}
        onSubmit={handleSubmit}
        submitText={selectedUser ? "Guardar Cambios" : "Crear Usuario"}
        isSubmitting={isSubmitting}
        icon={<UserCircleIcon />}
        description={selectedUser ? "Edita la fecha de expiración, tipo de créditos y contraseña del usuario" : "Crea un nuevo usuario para acceder a los servidores Emby"}
      >
        {/* Información de fecha de expiración calculada */}
        {!selectedUser && formData.creditsAllocated && (
          <div className="rounded-lg bg-blue-50 border border-blue-200 p-4 dark:bg-blue-900/20 dark:border-blue-800">
            <h4 className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-2">
              📅 Fecha de Expiración Calculada
            </h4>
            <p className="text-sm text-blue-700 dark:text-blue-300">
              {calculateExpirationDate() ? (
                <>
                  <strong>{calculateExpirationDate() ? formatDate(calculateExpirationDate()) : 'N/A'}</strong> a las{' '}
                  <strong>{calculateExpirationDate()?.toLocaleTimeString()}</strong>
                  <br />
                  <span className="text-xs">
                    ({formData.creditsAllocated} crédito{formData.creditsAllocated !== '1' ? 's' : ''} = {formData.creditsAllocated} mes{formData.creditsAllocated !== '1' ? 'es' : ''} de acceso)
                  </span>
                </>
              ) : (
                'Ingresa la cantidad de créditos para ver la fecha de expiración'
              )}
            </p>
          </div>
        )}
      </FormModal>
    </div>
  );
}
