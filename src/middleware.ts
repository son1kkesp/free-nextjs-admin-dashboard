import { NextRequest, NextResponse } from "next/server"
import { getSessionFromRequest } from "@/lib/auth-simple"
import { withPermissions } from "@/lib/middleware/permissions"

export default async function middleware(req: NextRequest) {
  const session = await getSessionFromRequest(req)
  const isAuth = !!session
  const isAuthPage = req.nextUrl.pathname.startsWith("/auth")

  // Si está en página de auth y ya está autenticado, redirigir al dashboard
  if (isAuthPage) {
    if (isAuth) {
      return NextResponse.redirect(new URL("/", req.url))
    }
    return null
  }

  // Si no está autenticado y no está en página de auth, redirigir al login
  if (!isAuth) {
    let from = req.nextUrl.pathname
    if (req.nextUrl.search) {
      from += req.nextUrl.search
    }

    return NextResponse.redirect(
      new URL(`/auth/signin?from=${encodeURIComponent(from)}`, req.url)
    )
  }

  // Verificar permisos granulares para todas las rutas
  const permissionCheck = withPermissions(req, session)
  if (permissionCheck) {
    return permissionCheck
  }

  return null
}

export const config = {
  matcher: [
    "/",
    "/users/:path*",
    "/admin/:path*",
    "/settings/:path*",
    "/auth/:path*"
  ]
}
