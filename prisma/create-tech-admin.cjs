const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

async function main() {
  const prisma = new PrismaClient();
  const email = "tech@emby.com";
  const password = "tech123";
  const hashed = await bcrypt.hash(password, 10);

  const user = await prisma.user.upsert({
    where: { email },
    update: { 
      hashedPassword: hashed, 
      isActive: true, 
      role: "TECH_ADMIN",
      isTest: true,  // TECH_ADMIN es para testing
      createdBy: null
    },
    create: { 
      email, 
      hashedPassword: hashed, 
      isActive: true, 
      role: "TECH_ADMIN",
      isTest: true,  // TECH_ADMIN es para testing
      createdBy: null
    },
  });

  console.log("✅ Usuario TECH_ADMIN creado exitosamente:");
  console.log(`📧 Email: ${user.email}`);
  console.log(`🔑 Contraseña: ${password}`);
  console.log(`👑 Rol: ${user.role}`);
  console.log(`🧪 Entorno: ${user.isTest ? 'Testing' : 'Producción'}`);
  await prisma.$disconnect();
}

main().catch(async (e) => {
  console.error(e);
  process.exit(1);
});
