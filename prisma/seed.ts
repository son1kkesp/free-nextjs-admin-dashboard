import { PrismaClient, RoleName } from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  // Seed Reseller Tiers
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

  // Crear usuario admin si no existe (placeholder, sin password)
  await prisma.user.upsert({
    where: { email: "admin@example.com" },
    update: {},
    create: {
      email: "admin@example.com",
      role: RoleName.SUPER_ADMIN,
      isActive: true,
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



