"use client";
import { useState } from "react";
import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button/Button";
import { EyeIcon, EyeCloseIcon } from "@/icons";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  console.log('🔍 SignInForm - Component rendered');
  console.log('🔍 SignInForm - Email state:', email);
  console.log('🔍 SignInForm - Password state:', password ? '***' : '');
  console.log('🔍 SignInForm - isLoading:', isLoading);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('🔍 SignInForm - handleSubmit called');
    console.log('🔍 SignInForm - Email:', email);
    console.log('🔍 SignInForm - Password length:', password.length);
    
    setIsLoading(true);
    setError("");

    try {
      console.log('🔍 SignInForm - Calling signIn...');
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      console.log('🔍 SignInForm - signIn result:', result);

      if (result?.error) {
        console.log('🔍 SignInForm - Error:', result.error);
        setError("Credenciales inválidas");
      } else if (result?.ok) {
        console.log('🔍 SignInForm - Login successful, getting session...');
        // Obtener la sesión para verificar el rol
        const session = await getSession();
        console.log('🔍 SignInForm - Session:', session);
        if (session?.user) {
          console.log('🔍 SignInForm - User found, redirecting...');
          // Redirigir según el rol
          router.push("/");
        } else {
          console.log('🔍 SignInForm - No user in session');
        }
      } else {
        console.log('🔍 SignInForm - Unexpected result:', result);
      }
    } catch (error) {
      console.error('🔍 SignInForm - Exception:', error);
      setError("Error al iniciar sesión");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Iniciar Sesión
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Accede a tu panel de administración Emby
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="mt-8 space-y-6" noValidate>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                placeholder="tu@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Contraseña
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                  placeholder="Tu contraseña"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeCloseIcon className="h-5 w-5 text-gray-400" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                Recordarme
              </label>
            </div>
          </div>

          <div>
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => console.log('🔍 SignInForm - Button clicked')}
            >
              {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
            </Button>
          </div>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400">
                  Credenciales de prueba
                </span>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <div className="text-xs text-gray-500 dark:text-gray-400">
                <strong>SUPER_ADMIN:</strong> admin@emby.com / admin123
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                <strong>TECH_ADMIN:</strong> tech@emby.com / tech123
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}