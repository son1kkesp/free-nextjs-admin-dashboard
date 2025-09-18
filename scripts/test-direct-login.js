const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function testDirectLogin() {
  try {
    console.log('🔍 Probando login directo...\n');

    // Simular el proceso completo de NextAuth
    const email = 'admin@emby.com';
    const password = 'admin123';

    console.log(`1️⃣ Buscando usuario: ${email}`);
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      console.log('❌ Usuario no encontrado');
      return;
    }

    console.log('✅ Usuario encontrado:', {
      id: user.id,
      email: user.email,
      role: user.role,
      isActive: user.isActive,
      isTest: user.isTest
    });

    console.log('\n2️⃣ Verificando contraseña...');
    const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);
    console.log('✅ Contraseña válida:', isPasswordValid);

    if (!isPasswordValid) {
      console.log('❌ Contraseña inválida');
      return;
    }

    console.log('\n3️⃣ Simulando objeto de NextAuth...');
    const authUser = {
      id: user.id,
      email: user.email,
      role: user.role,
      isActive: user.isActive,
    };

    console.log('✅ Objeto de autenticación:', authUser);

    console.log('\n4️⃣ Simulando token JWT...');
    const token = {
      sub: user.id,
      email: user.email,
      role: user.role,
      isActive: user.isActive,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + (30 * 24 * 60 * 60) // 30 días
    };

    console.log('✅ Token JWT:', token);

    console.log('\n5️⃣ Simulando sesión...');
    const session = {
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        isActive: user.isActive
      },
      expires: new Date(Date.now() + (30 * 24 * 60 * 60 * 1000)).toISOString()
    };

    console.log('✅ Sesión:', session);

    console.log('\n🎉 Proceso de autenticación simulado exitosamente');
    console.log('📊 El usuario debería aparecer como:', user.role);

  } catch (error) {
    console.error('❌ Error en la prueba:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testDirectLogin();
