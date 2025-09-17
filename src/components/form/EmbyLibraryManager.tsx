"use client";

import React, { useState, useEffect } from "react";
import Button from "@/components/ui/button/Button";
import Label from "@/components/form/Label";
import { TrashBinIcon, PlusIcon, FolderIcon, CheckCircleIcon, AlertIcon } from "@/icons/index";

interface EmbyLibrary {
  id: string;
  name: string;
  type: string;
  path: string;
}

interface SelectedLibrary {
  id: string;
  name: string;
  embyId: string;
  packageId: string;
}

interface EmbyLibraryManagerProps {
  serverId: string;
  libraries: SelectedLibrary[];
  onLibrariesChange: (libraries: SelectedLibrary[]) => void;
}

export default function EmbyLibraryManager({ 
  serverId, 
  libraries, 
  onLibrariesChange 
}: EmbyLibraryManagerProps) {
  const [embyLibraries, setEmbyLibraries] = useState<EmbyLibrary[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedLibraries, setSelectedLibraries] = useState<string[]>([]);

  // Cargar librerías cuando cambie el servidor
  useEffect(() => {
    if (serverId) {
      loadEmbyLibraries();
    } else {
      setEmbyLibraries([]);
      setSelectedLibraries([]);
    }
  }, [serverId]);

  const loadEmbyLibraries = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`/api/servers/${serverId}/libraries`);
      const data = await response.json();
      
      if (data.success) {
        setEmbyLibraries(data.libraries);
      } else {
        setError(data.error || "Error al cargar librerías");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Error al conectar con el servidor");
    } finally {
      setLoading(false);
    }
  };

  const toggleLibrary = (library: EmbyLibrary) => {
    const isSelected = selectedLibraries.includes(library.id);
    
    if (isSelected) {
      // Remover librería
      setSelectedLibraries(selectedLibraries.filter(id => id !== library.id));
      onLibrariesChange(libraries.filter(lib => lib.embyId !== library.id));
    } else {
      // Agregar librería
      setSelectedLibraries([...selectedLibraries, library.id]);
      
      const newLibrary: SelectedLibrary = {
        id: `temp-${Date.now()}-${library.id}`,
        name: library.name,
        embyId: library.id,
        packageId: "",
      };
      
      onLibrariesChange([...libraries, newLibrary]);
    }
  };

  const removeLibrary = (libraryId: string) => {
    setSelectedLibraries(selectedLibraries.filter(id => id !== libraryId));
    onLibrariesChange(libraries.filter(lib => lib.embyId !== libraryId));
  };

  const getLibraryTypeColor = (type: string) => {
    switch (type?.toLowerCase()) {
      case 'movies':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'tvshows':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'music':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'books':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getLibraryTypeLabel = (type: string) => {
    switch (type?.toLowerCase()) {
      case 'movies':
        return 'Películas';
      case 'tvshows':
        return 'Series';
      case 'music':
        return 'Música';
      case 'books':
        return 'Libros';
      default:
        return type || 'Otro';
    }
  };

  if (!serverId) {
    return (
      <div className="rounded-xl border-2 border-dashed border-gray-300 p-8 text-center dark:border-gray-600">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
          <FolderIcon />
        </div>
        <h4 className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Selecciona un servidor
        </h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Primero selecciona un servidor Emby para ver las librerías disponibles.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-blue-500 shadow-lg">
          <FolderIcon />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Librerías del Paquete
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Selecciona las librerías que estarán disponibles en este paquete
        </p>
      </div>

      {/* Botón para recargar librerías */}
      <div className="flex justify-center">
        <Button
          onClick={loadEmbyLibraries}
          disabled={loading}
          variant="outline"
          className="rounded-xl"
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-400 border-t-transparent"></div>
              Cargando...
            </div>
          ) : (
            "Recargar Librerías"
          )}
        </Button>
      </div>

      {/* Error message */}
      {error && (
        <div className="rounded-xl bg-gradient-to-r from-red-50 to-pink-50 p-4 dark:from-red-900/20 dark:to-pink-900/20">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 dark:bg-red-900">
              <AlertIcon />
            </div>
            <span className="text-sm font-medium text-red-700 dark:text-red-400">
              {error}
            </span>
          </div>
        </div>
      )}

      {/* Lista de librerías disponibles */}
      {embyLibraries.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white">
              Librerías Disponibles
            </h4>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              {embyLibraries.length} {embyLibraries.length === 1 ? 'librería' : 'librerías'}
            </span>
          </div>
          
          <div className="max-h-64 space-y-2 overflow-y-auto">
            {embyLibraries.map((library) => {
              const isSelected = selectedLibraries.includes(library.id);
              return (
                <div
                  key={library.id}
                  className={`group flex items-center justify-between rounded-xl border p-4 transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'border-blue-500 bg-blue-50 dark:border-blue-400 dark:bg-blue-900/20'
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600'
                  }`}
                  onClick={() => toggleLibrary(library)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      isSelected
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
                    }`}>
                      {isSelected ? <CheckCircleIcon /> : <FolderIcon />}
                    </div>
                    <div>
                      <p className={`text-sm font-medium ${
                        isSelected
                          ? 'text-blue-900 dark:text-blue-100'
                          : 'text-gray-900 dark:text-white'
                      }`}>
                        {library.name}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`rounded-full px-2 py-1 text-xs font-medium ${getLibraryTypeColor(library.type)}`}>
                          {getLibraryTypeLabel(library.type)}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          ID: {library.id}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                    isSelected
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300 dark:border-gray-600'
                  }`}>
                    {isSelected && (
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Librerías seleccionadas */}
      {libraries.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white">
              Librerías Seleccionadas
            </h4>
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
              {libraries.length} {libraries.length === 1 ? 'seleccionada' : 'seleccionadas'}
            </span>
          </div>
          
          <div className="space-y-2">
            {libraries.map((library) => (
              <div
                key={library.id}
                className="group flex items-center justify-between rounded-xl border border-green-200 bg-green-50 p-3 dark:border-green-700 dark:bg-green-900/20"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white">
                    <CheckCircleIcon />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-green-900 dark:text-green-100">
                      {library.name}
                    </p>
                    <p className="text-xs text-green-700 dark:text-green-300">
                      ID: {library.embyId}
                    </p>
                  </div>
                </div>
                <Button
                  onClick={() => removeLibrary(library.embyId)}
                  className="opacity-0 transition-all duration-200 group-hover:opacity-100 rounded-full p-2 text-red-500 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20"
                >
                  <TrashBinIcon />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Estado vacío */}
      {embyLibraries.length === 0 && !loading && !error && (
        <div className="rounded-xl border-2 border-dashed border-gray-300 p-8 text-center dark:border-gray-600">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
            <FolderIcon />
          </div>
          <h4 className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
            No hay librerías disponibles
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Este servidor no tiene librerías configuradas o no se pudo conectar.
          </p>
        </div>
      )}
    </div>
  );
}

