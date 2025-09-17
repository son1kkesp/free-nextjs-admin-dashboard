import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import SettingsWidget from "./settings.widget";

export default async function SettingsPage() {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.email) {
    redirect("/auth/signin");
  }

  // Obtener el usuario actual con su configuración
  const currentUser = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: {
      id: true,
      email: true,
      name: true,
      defaultDomain: true,
      role: true,
    },
  });

  if (!currentUser) {
    redirect("/auth/signin");
  }

  return (
    <SettingsWidget user={currentUser} />
  );
}

