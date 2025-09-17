"use client"

import { usePermissions } from "./usePermissions"

export interface NavigationItem {
  label: string
  href: string
  icon?: string
  children?: NavigationItem[]
  permission?: string
}

export interface RoleLayout {
  navigation: NavigationItem[]
  showSidebar: boolean
  showHeader: boolean
  showFooter: boolean
  theme: 'admin' | 'reseller'
}

/**
 * Hook para determinar el layout y navegación según el rol del usuario
 */
export function useRoleLayout(): RoleLayout {
  const { isSuperAdmin, isTechAdmin, userPermissions } = usePermissions()

  if (isSuperAdmin()) {
    return {
      navigation: getSuperAdminNavigation(),
      showSidebar: true,
      showHeader: true,
      showFooter: false,
      theme: 'admin'
    }
  }

  if (isTechAdmin()) {
    return {
      navigation: getTechAdminNavigation(),
      showSidebar: true,
      showHeader: true,
      showFooter: false,
      theme: 'admin'
    }
  }

  // Resellers
  return {
    navigation: getResellerNavigation(userPermissions?.role || 'BASIC_RESELLER'),
    showSidebar: true,
    showHeader: true,
    showFooter: false,
    theme: 'reseller'
  }
}

/**
 * Navegación para SUPER_ADMIN
 */
function getSuperAdminNavigation(): NavigationItem[] {
  return [
    {
      label: 'Dashboard',
      href: '/',
      icon: 'dashboard'
    },
    {
      label: 'Usuarios',
      href: '/users',
      icon: 'users',
      children: [
        { label: 'Gestión de Usuarios', href: '/users', permission: 'users:read' },
        { label: 'Gestión de Resellers', href: '/users/resellers', permission: 'users:manage' },
        { label: 'Permisos y Roles', href: '/users/permissions', permission: 'users:manage' }
      ]
    },
    {
      label: 'Servidores',
      href: '/servers',
      icon: 'servers',
      children: [
        { label: 'Gestión de Servidores', href: '/servers', permission: 'servers:read' },
        { label: 'Librerías', href: '/servers/libraries', permission: 'libraries:read' },
        { label: 'Políticas', href: '/servers/policies', permission: 'policies:read' }
      ]
    },
    {
      label: 'Demos',
      href: '/demos',
      icon: 'demos',
      permission: 'demos:read'
    },
    {
      label: 'Paquetes',
      href: '/packages',
      icon: 'packages',
      permission: 'packages:read'
    },
    {
      label: 'Sistema',
      href: '/system',
      icon: 'system',
      children: [
        { label: 'Jobs y Colas', href: '/system/jobs', permission: 'jobs:read' },
        { label: 'Logs', href: '/system/logs', permission: 'audit:read' },
        { label: 'Configuración', href: '/system/config', permission: 'settings:read' }
      ]
    },
    {
      label: 'Auditoría',
      href: '/audit',
      icon: 'audit',
      permission: 'audit:read'
    },
    {
      label: 'Configuración',
      href: '/settings',
      icon: 'settings',
      permission: 'settings:read'
    }
  ]
}

/**
 * Navegación para TECH_ADMIN
 */
function getTechAdminNavigation(): NavigationItem[] {
  return [
    {
      label: 'Dashboard',
      href: '/',
      icon: 'dashboard'
    },
    {
      label: 'Usuarios',
      href: '/users',
      icon: 'users',
      permission: 'users:read'
    },
    {
      label: 'Servidores',
      href: '/servers',
      icon: 'servers',
      permission: 'servers:read'
    },
    {
      label: 'Demos',
      href: '/demos',
      icon: 'demos',
      permission: 'demos:read'
    },
    {
      label: 'Paquetes',
      href: '/packages',
      icon: 'packages',
      permission: 'packages:read'
    },
    {
      label: 'Sistema',
      href: '/system',
      icon: 'system',
      children: [
        { label: 'Jobs y Colas', href: '/system/jobs', permission: 'jobs:read' },
        { label: 'Logs', href: '/system/logs', permission: 'audit:read' }
      ]
    },
    {
      label: 'Auditoría',
      href: '/audit',
      icon: 'audit',
      permission: 'audit:read'
    }
  ]
}

/**
 * Navegación para Resellers
 */
function getResellerNavigation(role: string): NavigationItem[] {
  const baseNavigation: NavigationItem[] = [
    {
      label: 'Dashboard',
      href: '/',
      icon: 'dashboard'
    },
    {
      label: 'Mis Usuarios',
      href: '/my-users',
      icon: 'users',
      permission: 'users:read'
    },
    {
      label: 'Demos',
      href: '/demos',
      icon: 'demos',
      permission: 'demos:read'
    },
    {
      label: 'Paquetes',
      href: '/packages',
      icon: 'packages',
      permission: 'packages:read'
    }
  ]

  // Agregar funcionalidades específicas según el tipo de reseller
  if (role === 'PREMIUM_RESELLER') {
    baseNavigation.push(
      {
        label: 'Servidores',
        href: '/servers',
        icon: 'servers',
        permission: 'servers:read'
      },
      {
        label: 'Reportes',
        href: '/reports',
        icon: 'reports',
        children: [
          { label: 'Ventas', href: '/reports/sales', permission: 'users:read' },
          { label: 'Usuarios', href: '/reports/users', permission: 'users:read' },
          { label: 'Demos', href: '/reports/demos', permission: 'demos:read' }
        ]
      }
    )
  } else if (role === 'ADVANCED_RESELLER') {
    baseNavigation.push({
      label: 'Reportes',
      href: '/reports',
      icon: 'reports',
      permission: 'users:read'
    })
  }

  return baseNavigation
}
