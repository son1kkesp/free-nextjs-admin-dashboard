const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function createResellerUsers() {
  console.log('🚀 Creando usuarios reseller...\n');

  try {
    // Usuarios a crear
    const usersToCreate = [
      {
        email: 'premium@emby.com',
        password: 'premium123',
        role: 'PREMIUM_RESELLER',
        description: 'Premium Reseller - Acceso completo a usuarios y servidores'
      },
      {
        email: 'advanced@emby.com',
        password: 'advanced123',
        role: 'ADVANCED_RESELLER',
        description: 'Advanced Reseller - Acceso a usuarios y servidores'
      },
      {
        email: 'basic@emby.com',
        password: 'basic123',
        role: 'BASIC_RESELLER',
        description: 'Basic Reseller - Acceso limitado'
      }
    ];

    for (const userData of usersToCreate) {
      console.log(`📝 Creando usuario: ${userData.email} (${userData.role})`);
      
      // Verificar si el usuario ya existe
      const existingUser = await prisma.user.findUnique({
        where: { email: userData.email }
      });

      if (existingUser) {
        console.log(`   ⚠️  Usuario ya existe, actualizando...`);
        
        // Actualizar contraseña
        const hashedPassword = await bcrypt.hash(userData.password, 12);
        
        await prisma.user.update({
          where: { email: userData.email },
          data: {
            hashedPassword,
            role: userData.role,
            isActive: true,
            isTest: true
          }
        });
        
        console.log(`   ✅ Usuario actualizado exitosamente`);
      } else {
        // Crear nuevo usuario
        const hashedPassword = await bcrypt.hash(userData.password, 12);
        
        await prisma.user.create({
          data: {
            email: userData.email,
            hashedPassword,
            role: userData.role,
            isActive: true,
            isTest: true,
            createdBy: 'system'
          }
        });
        
        console.log(`   ✅ Usuario creado exitosamente`);
      }
      
      console.log(`   📋 ${userData.description}`);
      console.log('');
    }

    // Mostrar resumen de todos los usuarios
    console.log('📊 RESUMEN DE USUARIOS:');
    console.log('========================');
    
    const allUsers = await prisma.user.findMany({
      select: {
        email: true,
        role: true,
        isActive: true,
        createdAt: true
      },
      orderBy: { role: 'asc' }
    });

    allUsers.forEach(user => {
      const status = user.isActive ? '✅ Activo' : '❌ Inactivo';
      console.log(`${user.role.padEnd(20)} | ${user.email.padEnd(25)} | ${status}`);
    });

    console.log('\n🎉 Usuarios reseller creados exitosamente!');
    console.log('\n🔐 CREDENCIALES DE ACCESO:');
    console.log('==========================');
    console.log('SUPER_ADMIN:     admin@emby.com    / admin123');
    console.log('TECH_ADMIN:      tech@emby.com     / tech123');
    console.log('PREMIUM_RESELLER: premium@emby.com / premium123');
    console.log('ADVANCED_RESELLER: advanced@emby.com / advanced123');
    console.log('BASIC_RESELLER:  basic@emby.com    / basic123');

  } catch (error) {
    console.error('❌ Error creando usuarios:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createResellerUsers();
