"use client";

import { useState, useEffect } from "react";
import { useToast } from "@/hooks/useToast";
import { useApi } from "@/hooks/useApi";
import { useAuth } from "@/hooks/useAuth";
import { UserRole } from "@prisma/client";
import Modal from "@/components/ui/modal/Modal";
import InputField from "@/components/form/input/InputField";
import SelectField from "@/components/form/select/SelectField";

interface CreateDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

interface Server {
  id: string;
  name: string;
  isTest: boolean;
  maxUsers: number;
  currentUsers: number;
}

export default function CreateDemoModal({
  isOpen,
  onClose,
  onSuccess
}: CreateDemoModalProps) {
  const { session } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    serverId: "",
    hoursDuration: 24,
    embyUserName: ""
  });
  const [servers, setServers] = useState<Server[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { showToast } = useToast();
  const { post, get } = useApi();

  // Cargar servidores disponibles
  useEffect(() => {
    if (isOpen && session?.user) {
      loadServers();
    }
  }, [isOpen, session]);

  const loadServers = async () => {
    try {
      const response = await get("/api/servers");
      if (response?.data?.items) {
        // Filtrar servidores según el rol del usuario
        let filteredServers = response.data.items;
        
        if (session?.user?.role === UserRole.TECH_ADMIN) {
          filteredServers = response.data.items.filter((server: Server) => server.isTest);
        } else if (session?.user?.role === UserRole.SUPER_ADMIN) {
          filteredServers = response.data.items.filter((server: Server) => !server.isTest);
        }
        
        setServers(filteredServers);
      }
    } catch (error) {
      console.error("Error al cargar servidores:", error);
      setError("Error al cargar servidores");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Validaciones
      if (!formData.email || !formData.password || !formData.serverId) {
        throw new Error("Todos los campos son requeridos");
      }

      if (formData.hoursDuration > 24) {
        throw new Error("La duración máxima de demo es 24 horas");
      }

      // Verificar que el servidor tenga capacidad
      const selectedServer = servers.find(s => s.id === formData.serverId);
      if (selectedServer && selectedServer.currentUsers >= selectedServer.maxUsers) {
        throw new Error(`El servidor ${selectedServer.name} ha alcanzado su límite máximo de usuarios`);
      }

      const demoData = {
        email: formData.email,
        password: formData.password,
        serverId: formData.serverId,
        hoursDuration: formData.hoursDuration,
        embyUserName: formData.embyUserName || undefined
      };

      await post("/api/demos", demoData);
      
      showToast("success", "Demo creado exitosamente!");
      onSuccess();
      onClose();
      resetForm();
    } catch (err: any) {
      setError(err.message);
      showToast("error", err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      email: "",
      password: "",
      serverId: "",
      hoursDuration: 24,
      embyUserName: ""
    });
    setError(null);
  };

  const handleClose = () => {
    if (!isLoading) {
      onClose();
      resetForm();
    }
  };

  const generateEmbyUserName = () => {
    if (formData.email) {
      const baseName = formData.email.replace('@', '_').replace(/[^a-zA-Z0-9_]/g, '');
      const timestamp = Date.now().toString().slice(-6);
      setFormData(prev => ({
        ...prev,
        embyUserName: `demo_${baseName}_${timestamp}`
      }));
    }
  };

  const getEnvironmentInfo = () => {
    if (session?.user?.role === UserRole.TECH_ADMIN) {
      return {
        title: "Crear Demo de Desarrollo",
        description: "Este demo se creará en un servidor de desarrollo para pruebas.",
        badge: "🧪 Desarrollo"
      };
    } else if (session?.user?.role === UserRole.SUPER_ADMIN) {
      return {
        title: "Crear Demo de Producción",
        description: "Este demo se creará en un servidor de producción.",
        badge: "🚀 Producción"
      };
    }
    return {
      title: "Crear Demo",
      description: "Crear un nuevo demo temporal.",
      badge: ""
    };
  };

  const envInfo = getEnvironmentInfo();

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={envInfo.title}
    >
      <div className="space-y-4">
        {envInfo.badge && (
          <div className="flex items-center space-x-2 mb-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
              {envInfo.badge}
            </span>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {envInfo.description}
            </p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md p-3">
            <p className="text-sm text-red-800 dark:text-red-200">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            label="Email del Demo"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="demo@ejemplo.com"
            required
          />

          <InputField
            label="Contraseña"
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder="Contraseña segura"
            required
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Usuario Emby (opcional)
            </label>
            <div className="flex space-x-2">
              <input
                type="text"
                value={formData.embyUserName}
                onChange={(e) => setFormData({ ...formData, embyUserName: e.target.value })}
                placeholder="Se generará automáticamente si se deja vacío"
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              />
              <button
                type="button"
                onClick={generateEmbyUserName}
                className="px-3 py-2 text-sm bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Generar
              </button>
            </div>
          </div>

          <SelectField
            label="Servidor"
            value={formData.serverId}
            onChange={(e) => setFormData({ ...formData, serverId: e.target.value })}
            options={servers.map(server => ({
              value: server.id,
              label: `${server.name} (${server.currentUsers}/${server.maxUsers} usuarios)`
            }))}
            placeholder="Seleccionar servidor"
            required
          />

          <InputField
            label="Duración (horas)"
            type="number"
            min="1"
            max="24"
            value={formData.hoursDuration}
            onChange={(e) => setFormData({ ...formData, hoursDuration: parseInt(e.target.value) })}
            required
          />

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-md p-3">
            <h4 className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-1">
              Información del Demo
            </h4>
            <ul className="text-xs text-blue-700 dark:text-blue-300 space-y-1">
              <li>• El demo tendrá acceso limitado (sin transcodificación, sin descargas)</li>
              <li>• Se creará automáticamente en el servidor Emby seleccionado</li>
              <li>• Expirará automáticamente después del tiempo especificado</li>
              <li>• Puede ser convertido a usuario permanente más tarde</li>
            </ul>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={handleClose}
              disabled={isLoading}
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Creando..." : "Crear Demo"}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
