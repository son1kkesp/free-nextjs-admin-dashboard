import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token
    const isAuth = !!token
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

    // Verificar permisos para rutas admin
    if (req.nextUrl.pathname.startsWith("/admin")) {
      const userRole = token?.role as string
      const adminRoles = ["SUPER_ADMIN", "TECH_ADMIN"]
      
      if (!adminRoles.includes(userRole)) {
        return NextResponse.redirect(new URL("/", req.url))
      }
    }

    return null
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        // Permitir acceso a páginas públicas
        return true
      },
    },
  }
)

export const config = {
  matcher: [
    "/",
    "/users/:path*",
    "/admin/:path*",
    "/settings/:path*",
    "/auth/:path*"
  ]
}
