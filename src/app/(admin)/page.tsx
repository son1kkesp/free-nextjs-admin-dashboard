"use client";
import React from "react";
import dynamic from "next/dynamic";

// Dynamically import the dashboard widget to avoid SSR issues
const DashboardWidget = dynamic(() => import("./dashboard.widget"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-64">
      <div className="text-gray-500">Cargando dashboard...</div>
    </div>
  ),
});

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Resumen general del sistema de gestión de usuarios Emby
        </p>
      </div>
      
      <DashboardWidget />
    </div>
  );
}
