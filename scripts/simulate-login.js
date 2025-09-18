const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function simulateLogin(email, password) {
  try {
    console.log(`🔍 Simulando login con ${email}...\n`);

    // Buscar usuario
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      console.log('❌ Usuario no encontrado');
      return null;
    }

    if (!user.hashedPassword) {
      console.log('❌ Usuario sin contraseña');
      return null;
    }

    // Verificar contraseña
    const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);
    if (!isPasswordValid) {
      console.log('❌ Contraseña inválida');
      return null;
    }

    // Simular el objeto que devuelve NextAuth
    const authUser = {
      id: user.id,
      email: user.email,
      role: user.role,
      isActive: user.isActive,
    };

    console.log('✅ Login exitoso:');
    console.log('   📧 Email:', authUser.email);
    console.log('   🆔 ID:', authUser.id);
    console.log('   👑 Rol:', authUser.role);
    console.log('   ✅ Activo:', authUser.isActive);
    console.log('   🧪 Test:', user.isTest);

    return authUser;

  } catch (error) {
    console.error('❌ Error en simulación:', error);
    return null;
  }
}

async function testBothLogins() {
  try {
    console.log('🚀 Iniciando pruebas de login...\n');

    // Probar admin
    console.log('='.repeat(50));
    const adminResult = await simulateLogin('admin@emby.com', 'admin123');
    console.log('='.repeat(50));

    // Probar tech
    console.log('\n');
    const techResult = await simulateLogin('tech@emby.com', 'tech123');
    console.log('='.repeat(50));

    // Comparar resultados
    console.log('\n📊 Comparación de resultados:');
    if (adminResult && techResult) {
      console.log(`   Admin Rol: ${adminResult.role}`);
      console.log(`   Tech Rol: ${techResult.role}`);
      console.log(`   Roles diferentes: ${adminResult.role !== techResult.role ? 'Sí' : 'No'}`);
    }

  } catch (error) {
    console.error('❌ Error en pruebas:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testBothLogins();
