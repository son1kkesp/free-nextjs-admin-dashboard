"use client";

import React from 'react';
import { formatDate } from '@/lib/date-utils';
import { UserCircleIcon, TrashBinIcon, CheckCircleIcon } from '@/icons/index';

interface Demo {
  id: string;
  email: string;
  password: string;
  embyUserName: string;
  serverId: string;
  hoursDuration: number;
  expirationDate: Date;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  server: {
    id: string;
    name: string;
    url: string;
    maxUsers: number;
  };
}

interface DemoCardProps {
  demo: Demo;
  onConvert: (demo: Demo) => void;
  onDelete: (demo: Demo) => void;
  onView: (demo: Demo) => void;
}

export default function DemoCard({ demo, onConvert, onDelete, onView }: DemoCardProps) {
  const isExpired = new Date(demo.expirationDate) <= new Date();
  const isNearExpired = !isExpired && (new Date(demo.expirationDate).getTime() - new Date().getTime()) <= 24 * 60 * 60 * 1000; // 24 horas

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm border p-4 transition-all hover:shadow-md ${
      isExpired ? 'border-red-200 dark:border-red-800' : 
      isNearExpired ? 'border-yellow-200 dark:border-yellow-800' : 
      'border-gray-200 dark:border-gray-700'
    }`}>
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-full ${
            isExpired ? 'bg-red-100 dark:bg-red-900' : 
            isNearExpired ? 'bg-yellow-100 dark:bg-yellow-900' : 
            'bg-blue-100 dark:bg-blue-900'
          }`}>
            <UserCircleIcon className={`w-5 h-5 ${
              isExpired ? 'text-red-600 dark:text-red-400' : 
              isNearExpired ? 'text-yellow-600 dark:text-yellow-400' : 
              'text-blue-600 dark:text-blue-400'
            }`} />
          </div>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">
              {demo.embyUserName}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {demo.email}
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              Servidor: {demo.server.name}
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
            isExpired ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300' : 
            isNearExpired ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' : 
            'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
          }`}>
            {isExpired ? 'Expirado' : isNearExpired ? 'Por expirar' : 'Activo'}
          </span>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="text-gray-500 dark:text-gray-400">Duración:</span>
          <p className="font-medium text-gray-900 dark:text-white">
            {demo.hoursDuration} horas
          </p>
        </div>
        <div>
          <span className="text-gray-500 dark:text-gray-400">Expira:</span>
          <p className="font-medium text-gray-900 dark:text-white">
            {formatDate(demo.expirationDate)}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onView(demo)}
            className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
          >
            Ver detalles
          </button>
        </div>
        
        <div className="flex items-center space-x-2">
          {!isExpired && (
            <button
              onClick={() => onConvert(demo)}
              className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <CheckCircleIcon className="w-4 h-4 mr-1" />
              Convertir
            </button>
          )}
          
          <button
            onClick={() => onDelete(demo)}
            className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            <TrashBinIcon className="w-4 h-4 mr-1" />
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}
