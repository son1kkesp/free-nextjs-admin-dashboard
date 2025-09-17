import { prisma } from "@/lib/prisma";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/lib/auth";
// import { redirect } from "next/navigation";
import SettingsWidget from "./settings.widget";

export default async function SettingsPage() {
  // TODO: Implementar autenticación cuando esté disponible
  // const session = await getServerSession(authOptions);
  // if (!session?.user?.email) {
  //   redirect("/auth/signin");
  // }

  // Obtener el usuario actual con su configuración (temporal: usar usuario por defecto)
  const currentUser = await prisma.user.findFirst({
    select: {
      id: true,
      email: true,
      role: true,
    },
  });

  if (!currentUser) {
    // Crear un usuario temporal si no existe ninguno
    const tempUser = {
      id: "temp",
      email: "admin@example.com",
      role: "BASIC_RESELLER" as const,
    };
    return <SettingsWidget user={tempUser} />;
  }

  return (
    <SettingsWidget user={currentUser} />
  );
}

