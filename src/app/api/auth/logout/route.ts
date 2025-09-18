import { NextResponse } from 'next/server'
import { signOut } from '@/lib/auth-simple'

export async function POST() {
  try {
    await signOut()
    return NextResponse.json({ success: true }, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    })
  } catch (error) {
    console.error('Error en logout API:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { 
        status: 500,
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      }
    )
  }
}

