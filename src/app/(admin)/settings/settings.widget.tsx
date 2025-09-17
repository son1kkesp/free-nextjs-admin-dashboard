"use client";

import { useState } from "react";
import Button from "@/components/ui/button/Button";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import ComponentCard from "@/components/common/ComponentCard";
// Usando alert nativo para notificaciones

interface User {
  id: string;
  email: string;
  role: string;
}

interface SettingsWidgetProps {
  user: User;
}

export default function SettingsWidget({ user }: SettingsWidgetProps) {
  const [defaultDomain, setDefaultDomain] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSaveDomain = async () => {
    if (!defaultDomain.trim()) {
      alert("El dominio no puede estar vacío");
      return;
    }

    // Validar formato de dominio básico
    const domainRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]?\.([a-zA-Z]{2,}|[a-zA-Z]{2,}\.[a-zA-Z]{2,})$/;
    if (!domainRegex.test(defaultDomain)) {
      alert("Formato de dominio inválido");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/settings/domain", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          defaultDomain: defaultDomain.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("Error al guardar configuración");
      }

      alert("Dominio guardado exitosamente");
    } catch (error) {
      console.error("Error:", error);
      alert("Error al guardar la configuración");
    } finally {
      setIsLoading(false);
    }
  };

  const generateRandomEmail = () => {
    const randomString = Math.random().toString(36).substring(2, 8);
    const randomNumber = Math.floor(Math.random() * 1000);
    return `user${randomString}${randomNumber}@${defaultDomain || "example.com"}`;
  };

  const generateRandomPassword = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let password = "";
    for (let i = 0; i < 12; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  };

  const [randomEmail, setRandomEmail] = useState(generateRandomEmail());
  const [randomPassword, setRandomPassword] = useState(generateRandomPassword());

  const handleGenerateEmail = () => {
    setRandomEmail(generateRandomEmail());
  };

  const handleGeneratePassword = () => {
    setRandomPassword(generateRandomPassword());
  };

  return (
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-title-md2 font-semibold text-black dark:text-white">
          Configuración del Sistema
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Configuración de Dominio */}
        <ComponentCard title="Configuración de Dominio" className="p-6">
          <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
            Configura el dominio por defecto para las cuentas que crees. Todas las cuentas nuevas usarán este dominio.
          </p>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="defaultDomain">Dominio por defecto</Label>
              <Input
                id="defaultDomain"
                type="text"
                placeholder="ejemplo.com"
                defaultValue={defaultDomain}
                onChange={(e) => setDefaultDomain(e.target.value)}
                className="mt-1"
              />
              <p className="mt-1 text-xs text-gray-500">
                Sin http:// o https://, solo el dominio (ej: ejemplo.com)
              </p>
            </div>
            
            <Button
              onClick={handleSaveDomain}
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? "Guardando..." : "Guardar Dominio"}
            </Button>
          </div>
        </ComponentCard>

        {/* Generador de Cuentas */}
        <ComponentCard title="Generador de Cuentas" className="p-6">
          <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
            Genera emails y contraseñas aleatorios para crear cuentas rápidamente.
          </p>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="randomEmail">Email aleatorio</Label>
              <div className="flex gap-2">
                <Input
                  id="randomEmail"
                  type="text"
                  defaultValue={randomEmail}
                  disabled={true}
                  className="flex-1"
                />
                <Button
                  onClick={handleGenerateEmail}
                  variant="outline"
                  size="sm"
                >
                  🎲
                </Button>
              </div>
            </div>
            
            <div>
              <Label htmlFor="randomPassword">Contraseña aleatoria</Label>
              <div className="flex gap-2">
                <Input
                  id="randomPassword"
                  type="text"
                  defaultValue={randomPassword}
                  disabled={true}
                  className="flex-1"
                />
                <Button
                  onClick={handleGeneratePassword}
                  variant="outline"
                  size="sm"
                >
                  🎲
                </Button>
              </div>
            </div>
            
            <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
              <p className="text-xs text-gray-600 dark:text-gray-400">
                💡 <strong>Tip:</strong> Usa estos valores generados al crear demos o usuarios para ahorrar tiempo.
              </p>
            </div>
          </div>
        </ComponentCard>
      </div>

      {/* Información del Usuario */}
      <ComponentCard title="Información de la Cuenta" className="mt-6 p-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <Label>Email de la cuenta</Label>
            <p className="text-sm text-gray-600 dark:text-gray-400">{user.email}</p>
          </div>
          <div>
            <Label>Nombre</Label>
            <p className="text-sm text-gray-600 dark:text-gray-400">Administrador</p>
          </div>
          <div>
            <Label>Rol</Label>
            <p className="text-sm text-gray-600 dark:text-gray-400">{user.role}</p>
          </div>
          <div>
            <Label>Dominio actual</Label>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {"No configurado"}
            </p>
          </div>
        </div>
      </ComponentCard>
    </div>
  );
}
