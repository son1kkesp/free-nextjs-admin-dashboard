const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function debugSession() {
  try {
    console.log('🔍 Verificando usuarios en la base de datos...\n');

    // Obtener todos los usuarios
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        role: true,
        isActive: true,
        isTest: true,
        hashedPassword: true,
        createdAt: true
      }
    });

    console.log('👥 Usuarios encontrados:');
    users.forEach((user, index) => {
      console.log(`\n${index + 1}. Usuario:`);
      console.log(`   📧 Email: ${user.email}`);
      console.log(`   🆔 ID: ${user.id}`);
      console.log(`   👑 Rol: ${user.role}`);
      console.log(`   ✅ Activo: ${user.isActive}`);
      console.log(`   🧪 Test: ${user.isTest}`);
      console.log(`   🔐 Tiene contraseña: ${user.hashedPassword ? 'Sí' : 'No'}`);
      console.log(`   📅 Creado: ${user.createdAt}`);
    });

    // Verificar si hay algún problema con los roles
    console.log('\n🔍 Verificando roles únicos:');
    const uniqueRoles = [...new Set(users.map(u => u.role))];
    console.log('   Roles encontrados:', uniqueRoles);

    // Verificar si hay usuarios duplicados
    console.log('\n🔍 Verificando duplicados:');
    const emailCounts = {};
    users.forEach(user => {
      emailCounts[user.email] = (emailCounts[user.email] || 0) + 1;
    });

    const duplicates = Object.entries(emailCounts).filter(([email, count]) => count > 1);
    if (duplicates.length > 0) {
      console.log('   ⚠️ Emails duplicados encontrados:');
      duplicates.forEach(([email, count]) => {
        console.log(`      ${email}: ${count} veces`);
      });
    } else {
      console.log('   ✅ No hay emails duplicados');
    }

    // Verificar configuración de NextAuth
    console.log('\n🔍 Verificando configuración de NextAuth:');
    console.log('   NEXTAUTH_SECRET:', process.env.NEXTAUTH_SECRET ? 'Configurado' : 'No configurado');
    console.log('   NEXTAUTH_URL:', process.env.NEXTAUTH_URL || 'No configurado');

  } catch (error) {
    console.error('❌ Error al verificar sesión:', error);
  } finally {
    await prisma.$disconnect();
  }
}

debugSession();
