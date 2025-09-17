// Seed en JavaScript para evitar dependencias adicionales en el contenedor
const { PrismaClient } = require("../src/generated/prisma");

const prisma = new PrismaClient();

async function main() {
  const tiers = [
    { name: "Premium", description: "Revendedor Premium", creditToDaysRate: 30 },
    { name: "Avanzado", description: "Revendedor Avanzado", creditToDaysRate: 30 },
    { name: "Principiante", description: "Revendedor Principiante", creditToDaysRate: 30 },
  ];

  for (const t of tiers) {
    await prisma.resellerTier.upsert({
      where: { name: t.name },
      update: { description: t.description, creditToDaysRate: t.creditToDaysRate },
      create: t,
    });
  }

  // Nota: el enum RoleName existe, pero en JS importarlo del cliente generado es innecesario
  const bcrypt = require('bcryptjs');
  const hashed = await bcrypt.hash('admin123', 10);
  await prisma.user.upsert({
    where: { email: "admin@example.com" },
    update: {},
    create: {
      email: "admin@example.com",
      role: "SUPER_ADMIN",
      isActive: true,
      hashedPassword: hashed,
    },
  });
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


