"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export interface User {
  id: string
  email: string
  role: string
  isActive: boolean
}

export interface Session {
  user: User
}

export function useAuth() {
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    checkSession()
  }, [])

  const checkSession = async () => {
    try {
      const response = await fetch('/api/auth/session', {
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      })
      if (response.ok) {
        const sessionData = await response.json()
        setSession(sessionData)
      } else {
        setSession(null)
      }
    } catch (error) {
      console.error('Error checking session:', error)
      setSession(null)
    } finally {
      setLoading(false)
    }
  }

  const signIn = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (response.ok) {
        // Limpiar sesión anterior y establecer nueva
        setSession(null)
        setLoading(true)
        
        // Esperar un momento para que se establezca la cookie
        await new Promise(resolve => setTimeout(resolve, 100))
        
        // Verificar la nueva sesión desde el servidor
        await checkSession()
        
        return { success: true }
      } else {
        return { success: false, error: data.error }
      }
    } catch (error) {
      console.error('Error signing in:', error)
      return { success: false, error: 'Error de conexión' }
    }
  }

  const signOut = async () => {
    try {
      // Limpiar estado inmediatamente
      setSession(null)
      setLoading(true)
      
      // Hacer logout en el servidor
      await fetch('/api/auth/logout', { 
        method: 'POST',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      })
      
      // Verificar que la sesión se haya eliminado
      await checkSession()
      
      // Redirigir a login
      router.push('/auth/signin')
      router.refresh() // Forzar actualización de la página
    } catch (error) {
      console.error('Error signing out:', error)
      // Asegurarse de limpiar el estado incluso si hay error
      setSession(null)
      setLoading(false)
    }
  }

  return {
    session,
    loading,
    signIn,
    signOut,
    checkSession
  }
}
