const { PrismaClient } = require("../src/generated/prisma");
const bcrypt = require("bcryptjs");

async function main() {
  const prisma = new PrismaClient();
  const email = "admin@example.com";
  const password = "admin123";
  const hashed = await bcrypt.hash(password, 10);

  const user = await prisma.user.upsert({
    where: { email },
    update: { hashedPassword: hashed, isActive: true, role: "SUPER_ADMIN" },
    create: { email, hashedPassword: hashed, isActive: true, role: "SUPER_ADMIN" },
  });

  console.log("Admin user:", { id: user.id, email: user.email, role: user.role });
  await prisma.$disconnect();
}

main().catch(async (e) => {
  console.error(e);
  process.exit(1);
});



