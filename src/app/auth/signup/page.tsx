import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registrarse | Emby Admin",
  description: "Regístrate en el panel de administración Emby",
};

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Registro no disponible
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            El registro está deshabilitado. Contacta al administrador.
          </p>
        </div>
      </div>
    </div>
  );
}
