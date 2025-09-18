"use client";

import { useState } from "react";
import { Modal } from "../ui/modal";
import InputField from "@/components/form/input/InputField";
import SelectField from "@/components/form/select/SelectField";
import Button from "@/components/ui/button/Button";
import { useToast } from "@/hooks/useToast";

interface CreateEmbyUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  serverId: string;
  serverName: string;
}

export default function CreateEmbyUserModal({
  isOpen,
  onClose,
  onSuccess,
  serverId,
  serverName
}: CreateEmbyUserModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    confirmPassword: "",
    isAdministrator: false,
    enableRemoteAccess: true,
    enableContentDownloading: false,
    maxActiveSessions: 3
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { showToast } = useToast();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    } else if (formData.name.length < 3) {
      newErrors.name = "El nombre debe tener al menos 3 caracteres";
    }

    if (!formData.password) {
      newErrors.password = "La contraseña es requerida";
    } else if (formData.password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
    }

    if (formData.maxActiveSessions < 1 || formData.maxActiveSessions > 10) {
      newErrors.maxActiveSessions = "Las sesiones deben estar entre 1 y 10";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/emby/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          serverId,
          name: formData.name,
          password: formData.password,
          isTest: false // Por defecto, crear usuarios de producción
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create user");
      }

      const result = await response.json();
      showToast("success", result.message);
      onSuccess();
      onClose();
      resetForm();
    } catch (error: any) {
      showToast("error", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      password: "",
      confirmPassword: "",
      isAdministrator: false,
      enableRemoteAccess: true,
      enableContentDownloading: false,
      maxActiveSessions: 3
    });
    setErrors({});
  };

  const handleClose = () => {
    if (!isLoading) {
      resetForm();
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title={`Crear Usuario en ${serverName}`}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3 mb-4">
          <p className="text-sm text-blue-700 dark:text-blue-300">
            <strong>Servidor:</strong> {serverName}
          </p>
        </div>

        <InputField
          label="Nombre de usuario"
          id="user-name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          error={errors.name}
          required
          placeholder="usuario123"
        />

        <InputField
          label="Contraseña"
          id="user-password"
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          error={errors.password}
          required
          placeholder="••••••••"
        />

        <InputField
          label="Confirmar contraseña"
          id="user-confirm-password"
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          error={errors.confirmPassword}
          required
          placeholder="••••••••"
        />

        <div className="space-y-3">
          <h4 className="text-sm font-medium text-gray-900 dark:text-white">
            Configuración de permisos
          </h4>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="is-administrator"
              checked={formData.isAdministrator}
              onChange={(e) => setFormData({ ...formData, isAdministrator: e.target.checked })}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="is-administrator" className="ml-2 block text-sm text-gray-900 dark:text-white">
              Administrador del servidor
            </label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="enable-remote-access"
              checked={formData.enableRemoteAccess}
              onChange={(e) => setFormData({ ...formData, enableRemoteAccess: e.target.checked })}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="enable-remote-access" className="ml-2 block text-sm text-gray-900 dark:text-white">
              Habilitar acceso remoto
            </label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="enable-content-downloading"
              checked={formData.enableContentDownloading}
              onChange={(e) => setFormData({ ...formData, enableContentDownloading: e.target.checked })}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="enable-content-downloading" className="ml-2 block text-sm text-gray-900 dark:text-white">
              Habilitar descarga de contenido
            </label>
          </div>
        </div>

        <InputField
          label="Máximo de sesiones activas"
          id="max-active-sessions"
          type="number"
          value={formData.maxActiveSessions}
          onChange={(e) => setFormData({ ...formData, maxActiveSessions: parseInt(e.target.value) || 1 })}
          error={errors.maxActiveSessions}
          min="1"
          max="10"
          required
        />

        <div className="flex justify-end gap-3 pt-4">
          <Button
            type="button"
            variant="secondary"
            onClick={handleClose}
            disabled={isLoading}
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            variant="primary"
            isLoading={isLoading}
          >
            Crear Usuario
          </Button>
        </div>
      </form>
    </Modal>
  );
}
