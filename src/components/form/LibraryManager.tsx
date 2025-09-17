"use client";

import React, { useState } from "react";
import Button from "@/components/ui/button/Button";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import { TrashBinIcon, PlusIcon, FolderIcon } from "@/icons/index";

interface Library {
  id: string;
  name: string;
  embyId: string;
  packageId: string;
}

interface LibraryManagerProps {
  libraries: Library[];
  onLibrariesChange: (libraries: Library[]) => void;
}

export default function LibraryManager({ libraries, onLibrariesChange }: LibraryManagerProps) {
  const [newLibrary, setNewLibrary] = useState({
    name: "",
    embyId: "",
  });

  const addLibrary = () => {
    if (newLibrary.name && newLibrary.embyId) {
      const library: Library = {
        id: `temp-${Date.now()}`,
        name: newLibrary.name,
        embyId: newLibrary.embyId,
        packageId: "",
      };
      onLibrariesChange([...libraries, library]);
      setNewLibrary({ name: "", embyId: "" });
    }
  };

  const removeLibrary = (index: number) => {
    onLibrariesChange(libraries.filter((_, i) => i !== index));
  };

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
          Agrega las librerías que estarán disponibles en este paquete
        </p>
      </div>

      {/* Formulario para agregar nueva librería */}
      <div className="rounded-xl border border-gray-200 bg-gradient-to-r from-gray-50 to-blue-50 p-6 shadow-sm dark:border-gray-700 dark:from-gray-800 dark:to-blue-900/20">
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="libraryName" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Nombre de la Librería
              </Label>
              <Input
                id="libraryName"
                type="text"
                defaultValue={newLibrary.name}
                onChange={(e) => setNewLibrary({ ...newLibrary, name: e.target.value })}
                placeholder="Ej: Películas HD"
                className="rounded-xl border-gray-200 bg-white shadow-sm transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-700 dark:focus:border-blue-400"
              />
            </div>
            <div>
              <Label htmlFor="libraryId" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                ID de Emby
              </Label>
              <Input
                id="libraryId"
                type="text"
                defaultValue={newLibrary.embyId}
                onChange={(e) => setNewLibrary({ ...newLibrary, embyId: e.target.value })}
                placeholder="Ej: 12345"
                className="rounded-xl border-gray-200 bg-white shadow-sm transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-700 dark:focus:border-blue-400"
              />
            </div>
          </div>
          <Button
            onClick={addLibrary}
            className="w-full rounded-xl bg-gradient-to-r from-green-600 to-blue-600 px-6 py-3 text-sm font-medium text-white shadow-lg transition-all duration-200 hover:from-green-700 hover:to-blue-700 hover:shadow-xl"
            startIcon={<PlusIcon />}
          >
            Agregar Librería
          </Button>
        </div>
      </div>

      {/* Lista de librerías */}
      {libraries.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white">
              Librerías Agregadas
            </h4>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              {libraries.length} {libraries.length === 1 ? 'librería' : 'librerías'}
            </span>
          </div>
          <div className="max-h-64 space-y-3 overflow-y-auto">
            {libraries.map((lib, index) => (
              <div
                key={lib.id}
                className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-sm">
                    <span className="text-sm font-bold text-white">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {lib.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      ID: {lib.embyId}
                    </p>
                  </div>
                </div>
                <Button
                  onClick={() => removeLibrary(index)}
                  className="opacity-0 transition-all duration-200 group-hover:opacity-100 rounded-full p-2 text-red-500 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20"
                >
                  <TrashBinIcon />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {libraries.length === 0 && (
        <div className="rounded-xl border-2 border-dashed border-gray-300 p-8 text-center dark:border-gray-600">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
            <FolderIcon />
          </div>
          <h4 className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
            No hay librerías agregadas
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Agrega la primera librería usando el formulario de arriba para comenzar.
          </p>
        </div>
      )}
    </div>
  );
}
