"use client";

import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  gradientFrom?: string;
  gradientTo?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
}

export function Modal({
  isOpen,
  onClose,
  title,
  subtitle,
  icon,
  gradientFrom = 'from-blue-500',
  gradientTo = 'to-indigo-600',
  children,
  size = 'lg',
  isLoading = false,
}: ModalProps) {
  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'sm:max-w-md',
    md: 'sm:max-w-lg',
    lg: 'sm:max-w-2xl',
    xl: 'sm:max-w-4xl',
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 text-center">
        {/* Overlay limpio sin blur */}
        <div 
          className="fixed inset-0 transition-opacity" 
          aria-hidden="true" 
          onClick={!isLoading ? onClose : undefined}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        {/* Modal */}
        <div className={`inline-block align-bottom bg-white dark:bg-gray-800 rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle ${sizeClasses[size]} sm:w-full border-0 ring-1 ring-gray-200 dark:ring-gray-700`}>
          {/* Header con gradiente */}
          <div className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} px-6 py-5 relative`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/25 rounded-xl backdrop-blur-sm">
                  {icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {title}
                  </h3>
                  {subtitle && (
                    <p className="text-white/90 text-sm">
                      {subtitle}
                    </p>
                  )}
                </div>
              </div>
              <button
                onClick={onClose}
                disabled={isLoading}
                className="text-white/90 hover:text-white hover:bg-white/25 p-2 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Contenido */}
          <div className="px-6 py-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente para información del usuario
interface UserInfoProps {
  user: {
    embyUserEmail?: string;
    embyUserName?: string;
    id: string;
  };
  server?: {
    name: string;
  };
}

export function UserInfo({ user, server }: UserInfoProps) {
  return (
    <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
      <div className="flex items-center space-x-3 mb-3">
        <div className="p-2 bg-blue-100 dark:bg-blue-800 rounded-lg">
          <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <h4 className="font-semibold text-blue-900 dark:text-blue-100">Información del usuario</h4>
      </div>
      <div className="space-y-2">
        {user.embyUserEmail && (
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">📧</span>
            <span className="text-blue-900 dark:text-blue-100 font-medium">{user.embyUserEmail}</span>
          </div>
        )}
        {user.embyUserName && (
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">👤</span>
            <span className="text-blue-900 dark:text-blue-100 font-medium">{user.embyUserName}</span>
          </div>
        )}
        {server && (
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">🖥️</span>
            <span className="text-blue-900 dark:text-blue-100 font-medium">Servidor: {server.name}</span>
          </div>
        )}
        {!user.embyUserEmail && !user.embyUserName && (
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">🆔</span>
            <span className="text-blue-900 dark:text-blue-100 font-medium">ID: {user.id}</span>
          </div>
        )}
      </div>
    </div>
  );
}

// Componente para botones de acción
interface ModalActionsProps {
  onCancel: () => void;
  onSubmit: () => void;
  submitText: string;
  submitIcon?: string;
  isLoading?: boolean;
  submitVariant?: 'primary' | 'success' | 'warning' | 'danger';
}

export function ModalActions({
  onCancel,
  onSubmit,
  submitText,
  submitIcon = '✅',
  isLoading = false,
  submitVariant = 'primary',
}: ModalActionsProps) {
  const variantClasses = {
    primary: 'from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 focus:ring-blue-200 dark:focus:ring-blue-800',
    success: 'from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 focus:ring-green-200 dark:focus:ring-green-800',
    warning: 'from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 focus:ring-yellow-200 dark:focus:ring-yellow-800',
    danger: 'from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 focus:ring-red-200 dark:focus:ring-red-800',
  };

  return (
    <div className="flex space-x-3 pt-4">
      <button
        type="button"
        onClick={onCancel}
        disabled={isLoading}
        className="flex-1 px-4 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Cancelar
      </button>
      <button
        type="button"
        onClick={onSubmit}
        disabled={isLoading}
        className={`flex-1 px-4 py-3 bg-gradient-to-r text-white rounded-xl focus:ring-4 transition-all duration-200 font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 ${variantClasses[submitVariant]}`}
      >
        {isLoading ? (
          <>
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Procesando...</span>
          </>
        ) : (
          <>
            <span>{submitIcon}</span>
            <span>{submitText}</span>
          </>
        )}
      </button>
    </div>
  );
}
