"use client";

import React, { useState } from "react";
import { Modal, ModalActions } from "../ui/modal";
import Button from "@/components/ui/button/Button";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import Select from "@/components/form/Select";

interface FormField {
  id: string;
  label: string;
  type: "text" | "email" | "password" | "url" | "date" | "select" | "textarea";
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  options?: { value: string; label: string }[];
  rows?: number;
  icon?: React.ReactNode;
  description?: string;
  showCurrentValue?: boolean;
  currentValue?: string;
  generateButton?: {
    onClick: () => void;
    label?: string;
  };
}

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  fields: FormField[];
  onSubmit: (e: React.FormEvent) => void;
  submitText: string;
  isSubmitting: boolean;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  description?: string;
}

export default function FormModal({
  isOpen,
  onClose,
  title,
  fields,
  onSubmit,
  submitText,
  isSubmitting,
  children,
  icon,
  description,
}: FormModalProps) {
  const [showPasswords, setShowPasswords] = useState<{ [key: string]: boolean }>({});

  const togglePasswordVisibility = (fieldId: string) => {
    setShowPasswords(prev => ({
      ...prev,
      [fieldId]: !prev[fieldId]
    }));
  };

  const editIcon = icon || (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      subtitle={description}
      icon={editIcon}
      variant="primary"
      size="lg"
    >
      <div className="space-y-6">

        <form onSubmit={onSubmit} className="space-y-6">
          {/* Campos del formulario */}
          <div className="space-y-5">
            {fields.map((field) => (
              <div key={field.id} className="group">
                <Label htmlFor={field.id} className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {field.label}
                  {field.required && <span className="ml-1 text-red-500">*</span>}
                </Label>
                
                {/* Mostrar valor actual si está habilitado */}
                {field.showCurrentValue && field.currentValue && (
                  <div className="mb-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Valor actual:</span>
                      <div className="flex items-center space-x-2">
                        {field.type === "password" ? (
                          <>
                            <span className="text-sm font-semibold text-gray-900 dark:text-gray-100" id={`current-${field.id}`}>
                              ••••••••
                            </span>
                            <button
                              type="button"
                              onClick={() => {
                                const element = document.getElementById(`current-${field.id}`);
                                if (element) {
                                  const isHidden = element.textContent === '••••••••';
                                  element.textContent = isHidden ? field.currentValue || 'Sin contraseña' : '••••••••';
                                }
                              }}
                              className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
                              title="Mostrar/ocultar contraseña actual"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            </button>
                          </>
                        ) : (
                          <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">{field.currentValue}</span>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                
                {field.description && (
                  <p className="mb-2 text-xs text-gray-500 dark:text-gray-400">
                    {field.description}
                  </p>
                )}

                <div className="relative">
                  {field.icon && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 dark:text-gray-500">
                      {field.icon}
                    </div>
                  )}
                  
                  {field.type === "select" ? (
                    <div className="flex gap-2">
                      <Select
                        defaultValue={field.value}
                        onChange={field.onChange}
                        options={field.options || []}
                        className={`flex-1 ${field.icon ? "pl-10" : ""}`}
                        placeholder={field.placeholder || "Seleccionar..."}
                      />
                      {field.generateButton && (
                        <Button
                          onClick={() => {
                            field.generateButton?.onClick();
                          }}
                          variant="outline"
                          size="sm"
                          className="px-3"
                        >
                          🎯
                        </Button>
                      )}
                    </div>
                  ) : field.type === "textarea" ? (
                    <textarea
                      id={field.id}
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      placeholder={field.placeholder}
                      required={field.required}
                      rows={field.rows || 3}
                      className={`w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-800 placeholder:text-gray-400 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/20 ${field.icon ? "pl-10" : ""}`}
                    />
                  ) : field.type === "password" ? (
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <Input
                          id={field.id}
                          type={showPasswords[field.id] ? "text" : "password"}
                          defaultValue={field.value}
                          onChange={(e) => field.onChange(e.target.value)}
                          placeholder={field.placeholder}
                          className={`${field.icon ? "pl-10" : ""} pr-10`}
                        />
                        <button
                          type="button"
                          onClick={() => togglePasswordVisibility(field.id)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
                        >
                          {showPasswords[field.id] ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          )}
                        </button>
                      </div>
                      {field.generateButton && (
                        <Button
                          onClick={() => {
                            field.generateButton?.onClick();
                          }}
                          variant="outline"
                          size="sm"
                          className="px-3"
                        >
                          🎲
                        </Button>
                      )}
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <Input
                        id={field.id}
                        type={field.type}
                        defaultValue={field.value}
                        onChange={(e) => field.onChange(e.target.value)}
                        placeholder={field.placeholder}
                        className={`flex-1 ${field.icon ? "pl-10" : ""} ${field.generateButton ? "pr-12" : ""}`}
                      />
                      {field.generateButton && (
                        <Button
                          onClick={() => {
                            field.generateButton?.onClick();
                          }}
                          variant="outline"
                          size="sm"
                          className="px-3"
                        >
                          🎲
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contenido adicional (como gestión de librerías) */}
          {children && (
            <div className="border-t border-gray-200 pt-6 dark:border-gray-700">
              {children}
            </div>
          )}

          {/* Botones de acción */}
          <ModalActions
            onCancel={onClose}
            onSubmit={() => {
              const form = document.querySelector('form');
              if (form) {
                form.requestSubmit();
              }
            }}
            submitText={submitText}
            isLoading={isSubmitting}
            submitVariant="primary"
          />
        </form>
      </div>
    </Modal>
  );
}
