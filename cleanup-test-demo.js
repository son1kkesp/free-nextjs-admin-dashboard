const { PrismaClient } = require('./src/generated/prisma');

async function cleanupTestDemo() {
  const prisma = new PrismaClient();
  
  console.log('🗑️  LIMPIANDO DEMO DE PRUEBA\n');
  
  try {
    // Buscar la demo de prueba (la más reciente con email que contenga "test-policy")
    const testDemo = await prisma.embyUser.findFirst({
      where: {
        email: {
          contains: 'test-policy',
        },
      },
      include: {
        userServerLinks: true,
        embyAccounts: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    
    if (!testDemo) {
      console.log('❌ No se encontró demo de prueba para limpiar');
      return;
    }
    
    console.log('🔍 Demo encontrada:');
    console.log('📧 Email:', testDemo.email);
    console.log('🆔 ID:', testDemo.id);
    console.log('📅 Creada:', testDemo.createdAt);
    
    // Eliminar EmbyAccount
    if (testDemo.embyAccounts.length > 0) {
      for (const account of testDemo.embyAccounts) {
        await prisma.embyAccount.delete({
          where: { id: account.id },
        });
        console.log('✅ EmbyAccount eliminado:', account.id);
      }
    }
    
    // Eliminar UserServerLink
    if (testDemo.userServerLinks.length > 0) {
      for (const link of testDemo.userServerLinks) {
        await prisma.userServerLink.delete({
          where: { id: link.id },
        });
        console.log('✅ UserServerLink eliminado:', link.id);
      }
    }
    
    // Eliminar EmbyUser
    await prisma.embyUser.delete({
      where: { id: testDemo.id },
    });
    console.log('✅ EmbyUser eliminado:', testDemo.id);
    
    console.log('\n🎉 ¡Limpieza completada exitosamente!');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

cleanupTestDemo();

