import { SignJWT, jwtVerify } from 'jose'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'

const JWT_SECRET = new TextEncoder().encode(process.env.NEXTAUTH_SECRET || 'fallback-secret')

export interface User {
  id: string
  email: string
  role: string
  isActive: boolean
}

export interface Session {
  user: User
}

export async function signIn(email: string, password: string): Promise<{ success: boolean; user?: User; error?: string }> {
  try {
    const user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user || !user.hashedPassword) {
      return { success: false, error: 'Credenciales inválidas' }
    }

    const isPasswordValid = await bcrypt.compare(password, user.hashedPassword)
    if (!isPasswordValid) {
      return { success: false, error: 'Credenciales inválidas' }
    }

    if (!user.isActive) {
      return { success: false, error: 'Usuario inactivo' }
    }

    const userData: User = {
      id: user.id,
      email: user.email,
      role: user.role,
      isActive: user.isActive
    }

    const token = await new SignJWT(userData)
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('7d')
      .sign(JWT_SECRET)

    // Establecer cookie
    const cookieStore = await cookies()
    cookieStore.set('auth-token', token, {
      httpOnly: true,
      secure: false, // false para desarrollo
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60, // 7 días
      path: '/'
    })

    return { success: true, user: userData }
  } catch (error) {
    console.error('Error en signIn:', error)
    return { success: false, error: 'Error interno del servidor' }
  }
}

export async function signOut(): Promise<void> {
  const cookieStore = await cookies()
  
  // Eliminar la cookie de múltiples maneras para asegurar que se elimine
  cookieStore.delete('auth-token')
  
  // También establecer con expiración en el pasado
  cookieStore.set('auth-token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
    expires: new Date(0) // Fecha en el pasado
  })
}

export async function getSession(): Promise<Session | null> {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('auth-token')?.value

    if (!token) {
      return null
    }

    const { payload } = await jwtVerify(token, JWT_SECRET)
    const decoded = payload as User
    return { user: decoded }
  } catch (error) {
    console.error('Error en getSession:', error)
    return null
  }
}

export async function getSessionFromRequest(request: NextRequest): Promise<Session | null> {
  try {
    const token = request.cookies.get('auth-token')?.value

    if (!token) {
      return null
    }

    const { payload } = await jwtVerify(token, JWT_SECRET)
    const decoded = payload as User
    return { user: decoded }
  } catch (error) {
    console.error('Error en getSessionFromRequest:', error)
    return null
  }
}
