"use client";

import React from 'react';

interface ResponsiveTableProps {
  headers: string[];
  children: React.ReactNode;
  className?: string;
}

export default function ResponsiveTable({ headers, children, className = "" }: ResponsiveTableProps) {
  return (
    <div className={`rounded-sm border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 ${className}`}>
      {/* Headers - Solo visible en desktop */}
      <div className="hidden md:grid grid-cols-7 border-t border-stroke px-4 py-4.5 dark:border-strokedark md:px-6 2xl:px-7.5">
        {headers.map((header, index) => (
          <div key={index} className="flex items-center">
            <p className="font-medium text-black dark:text-white">{header}</p>
          </div>
        ))}
      </div>

      {/* Contenido */}
      <div className="space-y-0">
        {children}
      </div>
    </div>
  );
}

interface ResponsiveTableRowProps {
  children: React.ReactNode;
  className?: string;
}

export function ResponsiveTableRow({ children, className = "" }: ResponsiveTableRowProps) {
  return (
    <div className={`border-t border-stroke dark:border-strokedark ${className}`}>
      {/* Desktop view - Grid layout */}
      <div className="hidden md:grid grid-cols-7 px-4 py-4.5 md:px-6 2xl:px-7.5">
        {children}
      </div>

      {/* Mobile view - Card layout */}
      <div className="md:hidden p-4 space-y-3">
        {children}
      </div>
    </div>
  );
}

interface ResponsiveTableCellProps {
  children: React.ReactNode;
  label?: string; // Para la vista móvil
  className?: string;
  colSpan?: number;
}

export function ResponsiveTableCell({ children, label, className = "", colSpan = 1 }: ResponsiveTableCellProps) {
  return (
    <>
      {/* Desktop view */}
      <div className={`col-span-${colSpan} flex items-center ${className}`}>
        {children}
      </div>

      {/* Mobile view */}
      {label && (
        <div className={`md:hidden ${className}`}>
          <div className="flex justify-between items-start">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 min-w-0 flex-shrink-0">
              {label}:
            </span>
            <div className="text-right min-w-0 flex-1 ml-2">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

