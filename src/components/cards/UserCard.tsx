"use client";

import React, { useState, useEffect } from 'react';
import { formatDate } from '@/lib/date-utils';
import { CheckCircleIcon, AlertIcon, EyeIcon, EyeCloseIcon, CopyIcon } from '@/icons/index';
import { useToastContext } from '@/components/providers/ToastProvider';

interface UserCardProps {
  user: {
    id: string;
    embyUserId: string;
    embyUsername: string;
    createdAt: Date;
    embyUser: {
      id: string;
      email: string;
      name: string;
    };
    server: {
      id: string;
      name: string;
      baseUrl: string;
      maxUsers: number;
    };
    userServerLink: {
      id: string;
      creditsAllocated: number;
      creditsRemaining: number;
      creditType: string;
      expireAt: Date | null;
      isActive: boolean;
    } | null;
  };
  onEdit: (user: any) => void;
  onRenew: (userId: string) => void;
  onToggleActive: (userId: string) => void;
  onDelete: (userId: string) => void;
  isMobile?: boolean;
}

export default function UserCard({ user, onEdit, onRenew, onToggleActive, onDelete, isMobile = false }: UserCardProps) {
  const [isClient, setIsClient] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showPassword, setShowPassword] = useState(false);
  const { success, error } = useToastContext();

  useEffect(() => {
    setIsClient(true);
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Actualizar cada minuto

    return () => clearInterval(interval);
  }, []);

  const creditsInfo = user.userServerLink;
  const isExpired = isClient && creditsInfo?.expireAt ? new Date(creditsInfo.expireAt) < currentTime : false;
  const isExpiringSoon = isClient && creditsInfo?.expireAt ? {
    daysLeft: Math.ceil((new Date(creditsInfo.expireAt).getTime() - currentTime.getTime()) / (1000 * 60 * 60 * 24)),
    isSoon: Math.ceil((new Date(creditsInfo.expireAt).getTime() - currentTime.getTime()) / (1000 * 60 * 60 * 24)) <= 7
  } : null;

  const getStatusColor = () => {
    if (!isClient) return 'bg-green-500'; // Estado por defecto en servidor
    if (isExpired) return 'bg-red-500';
    if (isExpiringSoon?.isSoon) return 'bg-orange-500';
    return 'bg-green-500';
  };

  const getStatusText = () => {
    if (!isClient) return 'Activo'; // Estado por defecto en servidor
    if (isExpired) return 'Expirado';
    if (isExpiringSoon?.isSoon) return 'Expira pronto';
    return 'Activo';
  };

  const getStatusIcon = () => {
    if (!isClient) return <CheckCircleIcon />; // Estado por defecto en servidor
    if (isExpired) return <AlertIcon />;
    if (isExpiringSoon?.isSoon) return <AlertIcon />;
    return <CheckCircleIcon />;
  };

  const handleCopyPassword = async () => {
    // Aquí necesitarías obtener la contraseña real del usuario
    // Por ahora usaremos un placeholder
    const password = "user123"; // Esto debería venir de la base de datos
    
    try {
      await navigator.clipboard.writeText(password);
      success('Contraseña copiada', 'La contraseña se ha copiado al portapapeles');
    } catch (err) {
      console.error('Error al copiar contraseña:', err);
      error('Error al copiar', 'No se pudo copiar la contraseña');
    }
  };

  const formatExpirationTime = () => {
    if (!isClient || !creditsInfo?.expireAt) return 'Sin expiración';
    return creditsInfo.expireAt.toLocaleString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-200 ${isMobile ? 'p-4' : 'p-6'}`}>
      {/* Header con estado */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-black dark:text-white">
          Usuario
        </h3>
        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
          !isClient
            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
            : isExpired 
            ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
            : isExpiringSoon?.isSoon
            ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300'
            : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
        }`}>
          {getStatusIcon()}
          <span className="ml-1">{getStatusText()}</span>
        </div>
      </div>

      {/* Información de la cuenta */}
      <div className="space-y-3 mb-4">
        {/* Email */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">Email:</span>
          <span className="text-sm font-medium text-gray-900 dark:text-white">{user.embyUser.email}</span>
        </div>

        {/* Contraseña */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">Contraseña:</span>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {showPassword ? "user123" : "••••••••"}
            </span>
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              title={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
            >
              {showPassword ? <EyeCloseIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
            </button>
            <button
              onClick={handleCopyPassword}
              className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              title="Copiar contraseña"
            >
              <CopyIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Servidor */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">Servidor:</span>
          <span className="text-sm font-medium text-gray-900 dark:text-white">{user.server.name}</span>
        </div>

        {/* Fecha de expiración */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">Expira:</span>
          <span className={`text-sm font-medium ${isExpired ? 'text-red-600 dark:text-red-400' : isExpiringSoon?.isSoon ? 'text-orange-600 dark:text-orange-400' : 'text-gray-900 dark:text-white'}`}>
            {formatExpirationTime()}
          </span>
        </div>
      </div>

      {/* Botones de acción - Repartidos proporcionalmente */}
      <div className="grid grid-cols-4 gap-2">
        <button
          onClick={() => onEdit(user)}
          className="flex items-center justify-center px-2 py-3 text-xs font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-900/30"
          title="Editar usuario"
        >
          Editar
        </button>
        <button
          onClick={() => onRenew(user.id)}
          className="flex items-center justify-center px-2 py-3 text-xs font-medium text-green-600 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400 dark:hover:bg-green-900/30"
          title="Renovar créditos"
        >
          Renovar
        </button>
        <button
          onClick={() => onToggleActive(user.id)}
          className="flex items-center justify-center px-2 py-3 text-xs font-medium text-orange-600 bg-orange-50 border border-orange-200 rounded-lg hover:bg-orange-100 dark:bg-orange-900/20 dark:border-orange-800 dark:text-orange-400 dark:hover:bg-orange-900/30"
          title="Cambiar estado"
        >
          Estado
        </button>
        <button
          onClick={() => onDelete(user.id)}
          className="flex items-center justify-center px-2 py-3 text-xs font-medium text-red-600 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/30"
          title="Eliminar usuario"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}