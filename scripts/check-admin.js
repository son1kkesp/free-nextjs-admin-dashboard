const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function checkAdmin() {
  try {
    const admin = await prisma.user.findUnique({
      where: { email: 'admin@emby.com' }
    });
    
    if (admin) {
      console.log('✅ Usuario admin encontrado:');
      console.log('   📧 Email:', admin.email);
      console.log('   👑 Rol:', admin.role);
      console.log('   ✅ Activo:', admin.isActive);
      console.log('   🧪 Es Test:', admin.isTest);
      console.log('   📅 Creado:', admin.createdAt);
    } else {
      console.log('❌ Usuario admin no encontrado');
    }
  } catch (error) {
    console.error('❌ Error al verificar admin:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkAdmin();
