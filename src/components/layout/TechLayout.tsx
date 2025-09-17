import { ReactNode } from "react";
import AppHeader from "@/layout/AppHeader";
import RoleBasedNavigation from "@/components/navigation/RoleBasedNavigation";

interface TechLayoutProps {
  children: ReactNode;
}

export default function TechLayout({ children }: TechLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <RoleBasedNavigation />
      <div className="flex flex-col flex-1 overflow-hidden">
        <AppHeader />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900 p-6">
          {/* Banner de entorno de desarrollo */}
          <div className="mb-6 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 dark:bg-yellow-900/20 dark:border-yellow-400 dark:text-yellow-300">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">
                  🧪 <strong>Entorno de Desarrollo</strong> - TECH_ADMIN
                </p>
                <p className="text-sm mt-1">
                  Este es un entorno de testing. Los datos aquí son para pruebas y desarrollo.
                  No afectan el entorno de producción.
                </p>
              </div>
            </div>
          </div>
          
          {children}
        </main>
      </div>
    </div>
  );
}
