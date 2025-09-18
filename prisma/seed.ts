import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Iniciando seed de la base de datos...");

  // Crear usuarios de prueba con contraseñas hasheadas
  const users = [
    {
      email: "admin@emby.com",
      password: "admin123",
      role: "SUPER_ADMIN" as const,
      isActive: true,
    },
    {
      email: "tech@emby.com", 
      password: "tech123",
      role: "TECH_ADMIN" as const,
      isActive: true,
    },
    {
      email: "premium@emby.com",
      password: "premium123", 
      role: "PREMIUM_RESELLER" as const,
      isActive: true,
    },
    {
      email: "advanced@emby.com",
      password: "advanced123",
      role: "ADVANCED_RESELLER" as const, 
      isActive: true,
    },
    {
      email: "basic@emby.com",
      password: "basic123",
      role: "BASIC_RESELLER" as const,
      isActive: true,
    }
  ];

  for (const userData of users) {
    const hashedPassword = await bcrypt.hash(userData.password, 12);
    
    await prisma.user.upsert({
      where: { email: userData.email },
      update: { 
        hashedPassword,
        role: userData.role,
        isActive: userData.isActive 
      },
      create: {
        email: userData.email,
        hashedPassword,
        role: userData.role,
        isActive: userData.isActive,
      },
    });
    
    console.log(`✅ Usuario creado/actualizado: ${userData.email} (${userData.role})`);
  }

  console.log("🎉 Seed completado exitosamente!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });



