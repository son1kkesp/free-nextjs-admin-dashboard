import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página no encontrada | Emby Admin",
  description: "La página que buscas no existe",
};

export default function ErrorLayout({
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
