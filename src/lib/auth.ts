import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        })

        if (!user || !user.hashedPassword) {
          return null
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        )

        if (!isPasswordValid) {
          return null
        }

        return {
          id: user.id,
          email: user.email,
          role: user.role,
          isActive: user.isActive,
        }
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async jwt({ token, user }) {
      console.log('🔍 JWT Callback - User:', user);
      console.log('🔍 JWT Callback - Token:', token);
      
      if (user) {
        token.role = user.role
        token.isActive = user.isActive
        token.email = user.email
      }
      return token
    },
    async session({ session, token }) {
      console.log('🔍 Session Callback - Token:', token);
      console.log('🔍 Session Callback - Session:', session);
      
      if (token) {
        session.user.id = token.sub!
        session.user.role = token.role as string
        session.user.isActive = token.isActive as boolean
        session.user.email = token.email as string
        
        console.log('🔍 Session Callback - Updated session:', session);
      } else {
        console.log('🔍 Session Callback - No token found');
      }
      return session
    }
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  secret: process.env.NEXTAUTH_SECRET,
}
