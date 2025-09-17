"use client";

import React, { useState, useMemo } from 'react';
import { useToastContext } from '@/components/providers/ToastProvider';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { RenewUserModal } from '@/components/modals/RenewUserModal';
import { TransferUserModal } from '@/components/modals/TransferUserModal';
import { formatExpirationDate } from '@/lib/date-utils';

interface User {
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
  // Datos de Emby
  embyUserEmail?: string;
  embyUserName?: string;
}

interface UsersTableProps {
  users: User[];
  servers: any[];
  onEdit: (user: User) => void;
  onDelete: (userId: string) => void;
  onRenew: (userId: string) => void;
}

type SortField = 'email' | 'server' | 'expireAt' | 'status' | 'credits';
type SortDirection = 'asc' | 'desc';

export function UsersTable({ users, servers, onEdit, onDelete, onRenew }: UsersTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const [searchTerm, setSearchTerm] = useState('');
  const [serverFilter, setServerFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortField, setSortField] = useState<SortField>('expireAt');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [renewModalOpen, setRenewModalOpen] = useState(false);
  const [transferModalOpen, setTransferModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const { success } = useToastContext();
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Función para copiar al portapapeles
  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      success("Copiado", `${label} copiado al portapapeles`);
    } catch (err) {
      console.error('Error copying to clipboard:', err);
    }
  };

  // Función para copiar datos del usuario con mensaje predefinido
  const copyUserData = async (user: User) => {
    const serverName = user.server?.name || 'N/A';
    const connections = user.creditType === 'ONE_CONNECTION' ? '1' : '2';
    const expireDate = formatExpirationDate(user.expirationDate || null);
    
    // Mensaje predefinido (más adelante se podrá configurar desde Configuración)
    const message = `🎬 *Datos de tu cuenta StreamCloud*

📧 **Email:** ${user.embyUserEmail || 'Sin email'}
🔑 **Contraseña:** [Contraseña del usuario]
🖥️ **Servidor:** ${serverName}
🔗 **Conexiones:** ${connections} dispositivo${connections === '1' ? '' : 's'} simultáneo${connections === '1' ? '' : 's'}
📅 **Expira:** ${expireDate}

¡Disfruta de tu contenido! 🍿`;

    try {
      // Intentar usar la API moderna de clipboard
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(message);
        success("Datos copiados", "Mensaje con datos del usuario copiado al portapapeles");
      } else {
        // Fallback para navegadores que no soportan clipboard API
        fallbackCopyToClipboard(message);
      }
    } catch (err) {
      console.error('Error copying user data:', err);
      // Intentar fallback si la API moderna falla
      fallbackCopyToClipboard(message);
    }
  };

  // Función de fallback para copiar al portapapeles
  const fallbackCopyToClipboard = (text: string) => {
    try {
      // Crear un elemento textarea temporal
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      
      // Seleccionar y copiar el texto
      textArea.focus();
      textArea.select();
      
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      
      if (successful) {
        success("Datos copiados", "Mensaje con datos del usuario copiado al portapapeles");
      } else {
        // Si todo falla, mostrar el mensaje para copiar manualmente
        showManualCopyModal(text);
      }
    } catch (err) {
      console.error('Fallback copy failed:', err);
      showManualCopyModal(text);
    }
  };

  // Función para mostrar modal con texto para copiar manualmente
  const showManualCopyModal = (text: string) => {
    // Crear un modal temporal
    const modal = document.createElement('div');
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      padding: 20px;
    `;
    
    const content = document.createElement('div');
    content.style.cssText = `
      background: white;
      padding: 20px;
      border-radius: 8px;
      max-width: 90%;
      max-height: 80%;
      overflow-y: auto;
      position: relative;
    `;
    
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '✕';
    closeBtn.style.cssText = `
      position: absolute;
      top: 10px;
      right: 10px;
      background: none;
      border: none;
      font-size: 20px;
      cursor: pointer;
    `;
    
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.cssText = `
      width: 100%;
      height: 200px;
      margin: 10px 0;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-family: monospace;
      resize: vertical;
    `;
    
    const instructions = document.createElement('p');
    instructions.textContent = 'Selecciona todo el texto y cópialo manualmente (Ctrl+C o Cmd+C)';
    instructions.style.cssText = `
      margin: 10px 0;
      color: #666;
      font-size: 14px;
    `;
    
    const copyBtn = document.createElement('button');
    copyBtn.textContent = 'Intentar copiar de nuevo';
    copyBtn.style.cssText = `
      background: #007bff;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 10px;
    `;
    
    closeBtn.onclick = () => document.body.removeChild(modal);
    copyBtn.onclick = () => {
      textArea.select();
      try {
        document.execCommand('copy');
        success("Copiado", "Texto copiado al portapapeles");
        document.body.removeChild(modal);
      } catch (e) {
        alert('Por favor, selecciona y copia el texto manualmente');
      }
    };
    
    content.appendChild(closeBtn);
    content.appendChild(instructions);
    content.appendChild(textArea);
    content.appendChild(copyBtn);
    modal.appendChild(content);
    document.body.appendChild(modal);
    
    // Auto-seleccionar el texto
    setTimeout(() => textArea.select(), 100);
  };

  // Filtrar y ordenar usuarios
  const filteredAndSortedUsers = useMemo(() => {
    let filtered = users.filter(user => {
      const matchesSearch = (user.embyUserEmail || '').toLowerCase().includes(searchTerm.toLowerCase());
      const serverName = user.server?.name || '';
      const matchesServer = serverFilter === 'all' || serverName === serverFilter;
      const matchesStatus = statusFilter === 'all' || getUserStatus(user).status === statusFilter;
      
      return matchesSearch && matchesServer && matchesStatus;
    });

    // Ordenar
    filtered.sort((a, b) => {
      let aValue: any, bValue: any;
      
      switch (sortField) {
        case 'email':
          aValue = (a.embyUserEmail || '').toLowerCase();
          bValue = (b.embyUserEmail || '').toLowerCase();
          break;
        case 'server':
          aValue = (a.server?.name || '').toLowerCase();
          bValue = (b.server?.name || '').toLowerCase();
          break;
        case 'expireAt':
          aValue = a.expirationDate ? new Date(a.expirationDate).getTime() : 0;
          bValue = b.expirationDate ? new Date(b.expirationDate).getTime() : 0;
          break;
        case 'status':
          aValue = getUserStatus(a).status.toLowerCase();
          bValue = getUserStatus(b).status.toLowerCase();
          break;
        case 'credits':
          aValue = a.credits || 0;
          bValue = b.credits || 0;
          break;
        default:
          return 0;
      }

      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    return filtered;
  }, [users, searchTerm, serverFilter, statusFilter, sortField, sortDirection]);

  // Paginación
  const totalPages = Math.ceil(filteredAndSortedUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedUsers = filteredAndSortedUsers.slice(startIndex, endIndex);

  // Función para cambiar ordenamiento
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const handleRenewUser = (user: User) => {
    setSelectedUser(user);
    setRenewModalOpen(true);
  };

  const handleRenewSuccess = () => {
    window.location.reload();
  };

  const handleTransferUser = (user: User) => {
    setSelectedUser(user);
    setTransferModalOpen(true);
  };

  const handleTransferSuccess = () => {
    window.location.reload();
  };

  // Función para determinar el estado del usuario
  const getUserStatus = (user: User): { status: string; color: string; bgColor: string } => {
    if (!user.expirationDate) {
      return { 
        status: 'SIN_FECHA', 
        color: 'text-gray-600 dark:text-gray-400', 
        bgColor: 'bg-gray-50 dark:bg-gray-800' 
      };
    }
    
    const expireDate = new Date(user.expirationDate);
    const now = new Date();
    const diffTime = expireDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays <= 0) {
      return { 
        status: 'EXPIRADO', 
        color: 'text-red-600 dark:text-red-400', 
        bgColor: 'bg-red-50/30 dark:bg-red-900/10' 
      };
    } else if (diffDays <= 5) {
      return { 
        status: 'CASI_EXPIRADO', 
        color: 'text-yellow-600 dark:text-yellow-400', 
        bgColor: 'bg-yellow-50/30 dark:bg-yellow-900/10' 
      };
    } else {
      return { 
        status: 'ACTIVO', 
        color: 'text-green-600 dark:text-green-400', 
        bgColor: 'bg-green-50/30 dark:bg-green-900/10' 
      };
    }
  };

  // Función para obtener el texto del estado
  const getStatusText = (status: string): string => {
    switch (status) {
      case 'ACTIVO': return 'Activo';
      case 'CASI_EXPIRADO': return 'Casi expirado';
      case 'EXPIRADO': return 'Expirado';
      case 'INACTIVO': return 'Inactivo';
      case 'SIN_FECHA': return 'Sin fecha';
      default: return 'Desconocido';
    }
  };

  // Función para obtener el icono de ordenamiento
  const getSortIcon = (field: SortField) => {
    if (sortField !== field) return '↕️';
    return sortDirection === 'asc' ? '↑' : '↓';
  };


  // Función para obtener el estado visual
  const getStatusBadge = (status: string, expireAt: Date | null) => {
    const now = new Date();
    const isExpired = expireAt && new Date(expireAt) < now;
    
    if (isExpired) {
      return <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full dark:bg-red-900 dark:text-red-200">Expirado</span>;
    }
    
    switch (status) {
      case 'ACTIVE':
        return <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full dark:bg-green-900 dark:text-green-200">Activo</span>;
      case 'SUSPENDED':
        return <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full dark:bg-yellow-900 dark:text-yellow-200">Suspendido</span>;
      default:
        return <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full dark:bg-gray-700 dark:text-gray-200">{status}</span>;
    }
  };

  // Componente para menú desplegable de acciones
  const UserActionsDropdown = ({ user, onEdit, onDelete, onTransfer }: { user: User; onEdit: (user: User) => void; onDelete: (userId: string) => void; onTransfer: (user: User) => void }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = React.useRef<HTMLDivElement>(null);

    // Cerrar dropdown al hacer clic fuera
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-md dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center space-x-1"
        >
          <span>Más</span>
          <svg 
            className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-10">
            <div className="py-1">
              <button
                onClick={() => {
                  onEdit(user);
                  setIsOpen(false);
                }}
                className="flex items-center w-full px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/20 transition-colors"
              >
                <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Editar usuario
              </button>
                     <button
                       onClick={() => {
                         onTransfer(user);
                         setIsOpen(false);
                       }}
                       className="flex items-center w-full px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/20 transition-colors"
                     >
                       <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                       </svg>
                       Transferir usuario
                     </button>
                     <button
                       onClick={() => {
                         if (confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
                           onDelete(user.id);
                         }
                         setIsOpen(false);
                       }}
                       className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20 transition-colors"
                     >
                       <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                       </svg>
                       Eliminar usuario
                     </button>
              
              {/* Espacio para futuras opciones */}
              <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>
              
              <div className="px-4 py-2 text-xs text-gray-500 dark:text-gray-400">
                Más opciones próximamente...
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Componente para menú desplegable de acciones en móvil
  const MobileUserActionsDropdown = ({ user, onEdit, onDelete, onTransfer }: { user: User; onEdit: (user: User) => void; onDelete: (userId: string) => void; onTransfer: (user: User) => void }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = React.useRef<HTMLDivElement>(null);

    // Cerrar dropdown al hacer clic fuera
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      // Solo agregar listener cuando el dropdown está abierto
      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
        // También cerrar al hacer scroll en móvil
        const handleScroll = () => setIsOpen(false);
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
          window.removeEventListener('scroll', handleScroll);
        };
      }
    }, [isOpen]);

    return (
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-3 py-2 text-xs font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 active:bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:active:bg-gray-500 transition-colors flex items-center space-x-1 min-h-[36px] touch-manipulation"
        >
          <span>Más</span>
          <svg 
            className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-44 sm:w-40 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50 transform transition-all duration-200 ease-out animate-in slide-in-from-top-2">
            <div className="py-2">
              <button
                onClick={() => {
                  onEdit(user);
                  setIsOpen(false);
                }}
                className="flex items-center w-full px-4 py-3 text-sm text-blue-600 hover:bg-blue-50 active:bg-blue-100 dark:text-blue-400 dark:hover:bg-blue-900/20 dark:active:bg-blue-900/30 transition-colors touch-manipulation"
              >
                <svg className="w-4 h-4 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <span>Editar usuario</span>
              </button>
              <button
                onClick={() => {
                  onTransfer(user);
                  setIsOpen(false);
                }}
                className="flex items-center w-full px-4 py-3 text-sm text-blue-600 hover:bg-blue-50 active:bg-blue-100 dark:text-blue-400 dark:hover:bg-blue-900/20 dark:active:bg-blue-900/30 transition-colors touch-manipulation"
              >
                <svg className="w-4 h-4 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                <span>Transferir usuario</span>
              </button>
              <button
                onClick={() => {
                  if (confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
                    onDelete(user.id);
                  }
                  setIsOpen(false);
                }}
                className="flex items-center w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 active:bg-red-100 dark:text-red-400 dark:hover:bg-red-900/20 dark:active:bg-red-900/30 transition-colors touch-manipulation"
              >
                <svg className="w-4 h-4 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                <span>Eliminar usuario</span>
              </button>
              
              {/* Separador para futuras opciones */}
              <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
              
              <div className="px-4 py-2 text-xs text-gray-500 dark:text-gray-400 text-center">
                Más opciones próximamente...
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Componente para vista móvil
  const MobileUserCard = ({ user }: { user: User }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 mb-3">
      <div className="space-y-3">
        {/* Email */}
        <div>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</div>
          <div className="text-sm font-semibold text-gray-900 dark:text-white break-all">
            {user.embyUserEmail || 'Sin email'}
          </div>
        </div>

        {/* Servidor y Estado en la misma línea */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Servidor</div>
            <div className="text-sm text-gray-900 dark:text-white">
              {user.server?.name || 'N/A'}
            </div>
          </div>
                 <div>
                   <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Estado</div>
                   <div className="mt-1">
                     {(() => {
                       const userStatus = getUserStatus(user);
                       return (
                         <span className={`px-2 py-1 text-xs font-medium rounded-full ${userStatus.color} ${userStatus.bgColor}`}>
                           {getStatusText(userStatus.status)}
                         </span>
                       );
                     })()}
                   </div>
                 </div>
        </div>

        {/* Expiración y Conexiones */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Expira</div>
            <div className="text-sm text-gray-900 dark:text-white">
              {formatExpirationDate(user.expirationDate || null)}
            </div>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Conexiones</div>
            <div className="text-sm text-gray-900 dark:text-white">
              {user.creditType === 'ONE_CONNECTION' ? '1 conexión' : '2 conexiones'}
            </div>
          </div>
        </div>

        {/* Acciones */}
        <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-2 items-center">
            {/* Botones principales */}
            <button
              onClick={() => copyUserData(user)}
              className="px-3 py-1 text-xs font-medium text-purple-600 bg-purple-50 hover:bg-purple-100 rounded-md dark:bg-purple-900/20 dark:text-purple-400 dark:hover:bg-purple-900/30 transition-colors"
            >
              Copiar datos
            </button>
            <button
              onClick={() => handleRenewUser(user)}
              className="px-3 py-1 text-xs font-medium text-green-600 bg-green-50 hover:bg-green-100 rounded-md dark:bg-green-900/20 dark:text-green-400 dark:hover:bg-green-900/30 transition-colors"
            >
              Renovar
            </button>
            
            {/* Menú desplegable para otras acciones */}
            <MobileUserActionsDropdown user={user} onEdit={onEdit} onDelete={onDelete} onTransfer={handleTransferUser} />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-4">
      {/* Filtros y búsqueda */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className={`grid gap-4 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-4'}`}>
          {/* Búsqueda */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Buscar por email
            </label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar usuario..."
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Filtro por servidor */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Servidor
            </label>
            <select
              value={serverFilter}
              onChange={(e) => setServerFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="all">Todos los servidores</option>
              {servers.map(server => (
                <option key={server.id} value={server.name}>{server.name}</option>
              ))}
            </select>
          </div>

          {/* Filtro por estado */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Estado
            </label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="all">Todos los estados</option>
              <option value="ACTIVE">Activo</option>
              <option value="SUSPENDED">Suspendido</option>
            </select>
          </div>

          {/* Elementos por página */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Por página
            </label>
            <select
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>
        </div>
      </div>

      {/* Vista condicional: Tabla para desktop, Cards para móvil */}
      {isMobile ? (
        /* Vista móvil con cards */
        <div className="space-y-3">
          {paginatedUsers.map((user) => (
            <MobileUserCard key={user.id} user={user} />
          ))}
        </div>
      ) : (
        /* Vista desktop con tabla */
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                    onClick={() => handleSort('email')}
                  >
                    Email {getSortIcon('email')}
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                    onClick={() => handleSort('server')}
                  >
                    Servidor {getSortIcon('server')}
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                    onClick={() => handleSort('expireAt')}
                  >
                    Expira {getSortIcon('expireAt')}
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                    onClick={() => handleSort('status')}
                  >
                    Estado {getSortIcon('status')}
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                    onClick={() => handleSort('credits')}
                  >
                    Conexiones {getSortIcon('credits')}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {paginatedUsers.map((user) => {
                  const userStatus = getUserStatus(user);
                  return (
                    <tr key={user.id} className={`hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${userStatus.bgColor}`}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {user.embyUserEmail || 'Sin email'}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {user.server?.name || 'N/A'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {formatExpirationDate(user.expirationDate || null)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${userStatus.color} ${userStatus.bgColor}`}>
                        {getStatusText(userStatus.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-white">
                        {user.creditType === 'ONE_CONNECTION' ? '1 conexión' : '2 conexiones'}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        {/* Botones principales */}
                        <button
                          onClick={() => copyUserData(user)}
                          className="px-3 py-1 text-xs font-medium text-purple-600 bg-purple-50 hover:bg-purple-100 rounded-md dark:bg-purple-900/20 dark:text-purple-400 dark:hover:bg-purple-900/30 transition-colors"
                        >
                          Copiar datos
                        </button>
                        <button
                          onClick={() => handleRenewUser(user)}
                          className="px-3 py-1 text-xs font-medium text-green-600 bg-green-50 hover:bg-green-100 rounded-md dark:bg-green-900/20 dark:text-green-400 dark:hover:bg-green-900/30 transition-colors"
                        >
                          Renovar
                        </button>
                        
                        {/* Menú desplegable para otras acciones */}
                        <UserActionsDropdown user={user} onEdit={onEdit} onDelete={onDelete} onTransfer={handleTransferUser} />
                      </div>
                    </td>
                  </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Paginación */}
      <div className="bg-white dark:bg-gray-800 px-4 py-3 flex items-center justify-between border-t border-gray-200 dark:border-gray-700 sm:px-6">
        <div className="flex-1 flex justify-between sm:hidden">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Anterior
          </button>
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Siguiente
          </button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Mostrando{' '}
              <span className="font-medium">{startIndex + 1}</span>
              {' '}a{' '}
              <span className="font-medium">{Math.min(endIndex, filteredAndSortedUsers.length)}</span>
              {' '}de{' '}
              <span className="font-medium">{filteredAndSortedUsers.length}</span>
              {' '}resultados
            </p>
          </div>
          <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="sr-only">Anterior</span>
                ←
              </button>
              
              {/* Números de página */}
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const pageNum = Math.max(1, Math.min(totalPages - 4, currentPage - 2)) + i;
                if (pageNum > totalPages) return null;
                
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                      pageNum === currentPage
                        ? 'z-10 bg-blue-50 dark:bg-blue-900 border-blue-500 text-blue-600 dark:text-blue-300'
                        : 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
              
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="sr-only">Siguiente</span>
                →
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Modal de renovación de usuario */}
      <RenewUserModal
        isOpen={renewModalOpen}
        onClose={() => {
          setRenewModalOpen(false);
          setSelectedUser(null);
        }}
        user={selectedUser}
        onSuccess={handleRenewSuccess}
      />

      {/* Modal de transferencia de usuario */}
      <TransferUserModal
        isOpen={transferModalOpen}
        onClose={() => {
          setTransferModalOpen(false);
          setSelectedUser(null);
        }}
        user={selectedUser}
        servers={servers}
        onSuccess={handleTransferSuccess}
      />
    </div>
  );
}