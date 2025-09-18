const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function testLogin() {
  try {
    console.log('🔍 Probando autenticación de usuarios...\n');

    // Probar login con admin@emby.com
    console.log('1️⃣ Probando login con admin@emby.com...');
    const adminUser = await prisma.user.findUnique({
      where: { email: 'admin@emby.com' }
    });

    if (adminUser) {
      console.log('   ✅ Usuario encontrado:');
      console.log(`      📧 Email: ${adminUser.email}`);
      console.log(`      👑 Rol: ${adminUser.role}`);
      console.log(`      ✅ Activo: ${adminUser.isActive}`);
      console.log(`      🧪 Test: ${adminUser.isTest}`);
      
      // Verificar contraseña
      const isPasswordValid = await bcrypt.compare('admin123', adminUser.hashedPassword);
      console.log(`      🔐 Contraseña válida: ${isPasswordValid ? 'Sí' : 'No'}`);
    } else {
      console.log('   ❌ Usuario admin no encontrado');
    }

    console.log('\n2️⃣ Probando login con tech@emby.com...');
    const techUser = await prisma.user.findUnique({
      where: { email: 'tech@emby.com' }
    });

    if (techUser) {
      console.log('   ✅ Usuario encontrado:');
      console.log(`      📧 Email: ${techUser.email}`);
      console.log(`      👑 Rol: ${techUser.role}`);
      console.log(`      ✅ Activo: ${techUser.isActive}`);
      console.log(`      🧪 Test: ${techUser.isTest}`);
      
      // Verificar contraseña
      const isPasswordValid = await bcrypt.compare('tech123', techUser.hashedPassword);
      console.log(`      🔐 Contraseña válida: ${isPasswordValid ? 'Sí' : 'No'}`);
    } else {
      console.log('   ❌ Usuario tech no encontrado');
    }

    console.log('\n3️⃣ Verificando diferencias entre usuarios...');
    if (adminUser && techUser) {
      console.log('   📊 Comparación:');
      console.log(`      Admin Rol: ${adminUser.role} vs Tech Rol: ${techUser.role}`);
      console.log(`      Admin Test: ${adminUser.isTest} vs Tech Test: ${techUser.isTest}`);
      console.log(`      Admin Activo: ${adminUser.isActive} vs Tech Activo: ${techUser.isActive}`);
    }

  } catch (error) {
    console.error('❌ Error al probar login:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testLogin();
