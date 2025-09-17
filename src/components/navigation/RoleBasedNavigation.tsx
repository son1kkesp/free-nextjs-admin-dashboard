"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRoleLayout, NavigationItem } from "@/hooks/useRoleLayout"
import { usePermissions } from "@/hooks/usePermissions"
import { ChevronDownIcon, ChevronRightIcon } from "@/icons/index"

interface NavigationProps {
  className?: string
}

export default function RoleBasedNavigation({ className = "" }: NavigationProps) {
  const { navigation } = useRoleLayout()
  const { hasPermission } = usePermissions()
  const pathname = usePathname()
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleExpanded = (itemLabel: string) => {
    setExpandedItems(prev => 
      prev.includes(itemLabel) 
        ? prev.filter(item => item !== itemLabel)
        : [...prev, itemLabel]
    )
  }

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  const hasActiveChild = (children: NavigationItem[]) => {
    return children.some(child => isActive(child.href))
  }

  const renderNavigationItem = (item: NavigationItem, level: number = 0) => {
    // Verificar permisos
    if (item.permission && !hasPermission(item.permission as any)) {
      return null
    }

    const hasChildren = item.children && item.children.length > 0
    const isExpanded = expandedItems.includes(item.label)
    const isItemActive = isActive(item.href)
    const hasActiveChildItem = hasChildren && hasActiveChild(item.children!)

    const itemClasses = `
      flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors
      ${level > 0 ? 'ml-4' : ''}
      ${isItemActive || hasActiveChildItem 
        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400' 
        : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
      }
    `

    return (
      <div key={item.label}>
        <div className={itemClasses}>
          <Link 
            href={item.href} 
            className="flex items-center gap-2 flex-1"
          >
            {item.icon && (
              <span className="text-lg">
                {getIconComponent(item.icon)}
              </span>
            )}
            <span>{item.label}</span>
          </Link>
          
          {hasChildren && (
            <button
              onClick={() => toggleExpanded(item.label)}
              className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
            >
              {isExpanded ? (
                <ChevronDownIcon className="h-4 w-4" />
              ) : (
                <ChevronRightIcon className="h-4 w-4" />
              )}
            </button>
          )}
        </div>

        {hasChildren && isExpanded && (
          <div className="mt-1 space-y-1">
            {item.children!.map(child => renderNavigationItem(child, level + 1))}
          </div>
        )}
      </div>
    )
  }

  return (
    <nav className={`space-y-1 ${className}`}>
      {navigation.map(item => renderNavigationItem(item))}
    </nav>
  )
}

/**
 * Función para obtener el componente de icono
 */
function getIconComponent(iconName: string) {
  const iconMap: Record<string, string> = {
    dashboard: '📊',
    users: '👥',
    servers: '🖥️',
    demos: '🎬',
    packages: '📦',
    system: '🔧',
    audit: '📈',
    settings: '⚙️',
    reports: '📋',
    libraries: '📚',
    policies: '📋'
  }
  
  return iconMap[iconName] || '📄'
}
