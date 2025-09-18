import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autenticación | Emby Admin",
  description: "Páginas de autenticación del panel de administración Emby",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {children}
    </div>
  );
}
