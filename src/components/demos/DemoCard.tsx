"use client";

import React, { useState } from "react";
import { useToast } from "@/hooks/useToast";
import { useApi } from "@/hooks/useApi";
import Button from "@/components/ui/button/Button";
import { Modal } from "@/components/ui/Modal";
import InputField from "@/components/form/input/InputField";
import SelectField from "@/components/form/select/SelectField";

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

interface DemoCardProps {
  demo: Demo;
  onDemoUpdated: () => void;
  onDemoDeleted: () => void;
  onDemoConverted: () => void;
}

export default function DemoCard({ 
  demo, 
  onDemoUpdated, 
  onDemoDeleted, 
  onDemoConverted 
}: DemoCardProps) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showConvertModal, setShowConvertModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const { showToast } = useToast();
  const { put, post, delete: deleteApi } = useApi();

  // Estados para el modal de edición
  const [editData, setEditData] = useState({
    email: demo.email,
    password: demo.password,
    embyUserName: demo.embyUserName,
    hoursDuration: demo.hoursDuration,
    isActive: demo.isActive
  });

  // Estados para el modal de conversión
  const [convertData, setConvertData] = useState({
    creditType: 'ONE_CONNECTION',
    credits: 1
  });

  const handleEdit = async () => {
    setIsLoading(true);
    try {
      await put(`/api/demos/${demo.id}`, editData);
      onDemoUpdated();
      setShowEditModal(false);
    } catch (error) {
      console.error("Error al actualizar demo:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleConvert = async () => {
    setIsLoading(true);
    try {
      await post(`/api/demos/${demo.id}/convert`, convertData);
      onDemoConverted();
      setShowConvertModal(false);
    } catch (error) {
      console.error("Error al convertir demo:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      await deleteApi(`/api/demos/${demo.id}`);
      onDemoDeleted();
      setShowDeleteModal(false);
    } catch (error) {
      console.error("Error al eliminar demo:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ACTIVO':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'CASI EXPIRADO':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'EXPIRADO':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'INACTIVO':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getEnvironmentBadge = () => {
    if (demo.serverIsTest) {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
          🧪 Desarrollo
        </span>
      );
    }
    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
        🚀 Producción
      </span>
    );
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {demo.email}
              </h3>
              {getEnvironmentBadge()}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Usuario Emby: <span className="font-mono">{demo.embyUserName}</span>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Servidor: {demo.serverName}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(demo.status)}`}>
              {demo.status}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Duración</p>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {demo.hoursDuration}h
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Tiempo Restante</p>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {demo.hoursRemaining}h {demo.minutesRemaining}m
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Creado</p>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {new Date(demo.createdAt).toLocaleDateString()}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Creado Por</p>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {demo.createdBy}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex space-x-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setShowEditModal(true)}
              disabled={demo.isExpired}
            >
              Editar
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => setShowConvertModal(true)}
              disabled={demo.isExpired || !demo.isActive}
            >
              Convertir
            </Button>
          </div>
          <Button
            variant="danger"
            size="sm"
            onClick={() => setShowDeleteModal(true)}
          >
            Eliminar
          </Button>
        </div>
      </div>

      {/* Modal de Edición */}
      <Modal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        title="Editar Demo"
      >
        <div className="space-y-4">
          <InputField
            label="Email"
            type="email"
            value={editData.email}
            onChange={(e) => setEditData({ ...editData, email: e.target.value })}
            required
          />
          <InputField
            label="Contraseña"
            type="password"
            value={editData.password}
            onChange={(e) => setEditData({ ...editData, password: e.target.value })}
            required
          />
          <InputField
            label="Usuario Emby"
            value={editData.embyUserName}
            onChange={(e) => setEditData({ ...editData, embyUserName: e.target.value })}
            required
          />
          <InputField
            label="Duración (horas)"
            type="number"
            min="1"
            max="24"
            value={editData.hoursDuration}
            onChange={(e) => setEditData({ ...editData, hoursDuration: parseInt(e.target.value) })}
            required
          />
          <div className="flex items-center">
            <input
              type="checkbox"
              id="isActive"
              checked={editData.isActive}
              onChange={(e) => setEditData({ ...editData, isActive: e.target.checked })}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="isActive" className="ml-2 block text-sm text-gray-900 dark:text-white">
              Demo activo
            </label>
          </div>
          <div className="flex justify-end space-x-3">
            <Button
              variant="secondary"
              onClick={() => setShowEditModal(false)}
              disabled={isLoading}
            >
              Cancelar
            </Button>
            <Button
              variant="primary"
              onClick={handleEdit}
              isLoading={isLoading}
            >
              Guardar Cambios
            </Button>
          </div>
        </div>
      </Modal>

      {/* Modal de Conversión */}
      <Modal
        isOpen={showConvertModal}
        onClose={() => setShowConvertModal(false)}
        title="Convertir Demo a Usuario Permanente"
      >
        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Este demo será convertido a un usuario permanente con las siguientes características:
          </p>
          <SelectField
            label="Tipo de Crédito"
            value={convertData.creditType}
            onChange={(e) => setConvertData({ ...convertData, creditType: e.target.value })}
            options={[
              { value: 'ONE_CONNECTION', label: 'Una Conexión' },
              { value: 'TWO_CONNECTIONS', label: 'Dos Conexiones' },
              { value: 'THREE_CONNECTIONS', label: 'Tres Conexiones' },
              { value: 'UNLIMITED', label: 'Ilimitado' }
            ]}
            required
          />
          <InputField
            label="Créditos (meses)"
            type="number"
            min="1"
            max="12"
            value={convertData.credits}
            onChange={(e) => setConvertData({ ...convertData, credits: parseInt(e.target.value) })}
            required
          />
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-md p-3">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              ⚠️ Esta acción no se puede deshacer. El demo se convertirá en un usuario permanente.
            </p>
          </div>
          <div className="flex justify-end space-x-3">
            <Button
              variant="secondary"
              onClick={() => setShowConvertModal(false)}
              disabled={isLoading}
            >
              Cancelar
            </Button>
            <Button
              variant="primary"
              onClick={handleConvert}
              isLoading={isLoading}
            >
              Convertir Demo
            </Button>
          </div>
        </div>
      </Modal>

      {/* Modal de Eliminación */}
      <Modal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        title="Eliminar Demo"
      >
        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            ¿Estás seguro de que quieres eliminar este demo? Esta acción eliminará:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
            <li>El demo de la base de datos</li>
            <li>El usuario de Emby</li>
            <li>Todos los datos asociados</li>
          </ul>
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md p-3">
            <p className="text-sm text-red-800 dark:text-red-200">
              ⚠️ Esta acción no se puede deshacer.
            </p>
          </div>
          <div className="flex justify-end space-x-3">
            <Button
              variant="secondary"
              onClick={() => setShowDeleteModal(false)}
              disabled={isLoading}
            >
              Cancelar
            </Button>
            <Button
              variant="danger"
              onClick={handleDelete}
              isLoading={isLoading}
            >
              Eliminar Demo
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
