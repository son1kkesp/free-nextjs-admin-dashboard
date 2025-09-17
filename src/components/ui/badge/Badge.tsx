import { ReactNode } from "react"

interface BadgeProps {
  children: ReactNode
  variant?: "default" | "success" | "warning" | "error" | "outline"
  className?: string
}

export default function Badge({ 
  children, 
  variant = "default", 
  className = "" 
}: BadgeProps) {
  const baseClasses = "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium"
  
  const variantClasses = {
    default: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
    success: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
    warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400",
    error: "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400",
    outline: "border border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300"
  }
  
  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  )
}