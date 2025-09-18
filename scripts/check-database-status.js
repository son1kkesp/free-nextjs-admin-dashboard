const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function checkDatabaseStatus() {
  try {
    console.log('🔍 Verificando estado actual de la base de datos...\n');

    // Contar registros en cada tabla
    const counts = {
      users: await prisma.user.count(),
      embyServers: await prisma.embyServer.count(),
      demos: await prisma.demo.count(),
      embyAccounts: await prisma.embyAccount.count(),
      userServerLinks: await prisma.userServerLink.count(),
      packages: await prisma.package.count(),
      libraries: await prisma.library.count(),
      policies: await prisma.policy.count()
    };

    console.log('📊 Estado actual de la base de datos:');
    console.log(`   👤 Users: ${counts.users}`);
    console.log(`   🖥️  EmbyServers: ${counts.embyServers}`);
    console.log(`   🎬 Demos: ${counts.demos}`);
    console.log(`   👥 EmbyAccounts: ${counts.embyAccounts}`);
    console.log(`   🔗 UserServerLinks: ${counts.userServerLinks}`);
    console.log(`   📦 Packages: ${counts.packages}`);
    console.log(`   📚 Libraries: ${counts.libraries}`);
    console.log(`   📋 Policies: ${counts.policies}\n`);

    // Mostrar usuarios existentes
    const users = await prisma.user.findMany({
      select: {
        email: true,
        role: true,
        isActive: true,
        isTest: true,
        createdAt: true
      }
    });

    console.log('👥 Usuarios en el sistema:');
    users.forEach((user, index) => {
      console.log(`   ${index + 1}. 📧 ${user.email}`);
      console.log(`      👑 Rol: ${user.role}`);
      console.log(`      ✅ Activo: ${user.isActive}`);
      console.log(`      🧪 Test: ${user.isTest}`);
      console.log(`      📅 Creado: ${user.createdAt.toLocaleDateString()}`);
      console.log('');
    });

    // Verificar si hay servidores
    const servers = await prisma.embyServer.findMany({
      select: {
        name: true,
        url: true,
        isActive: true,
        isTest: true,
        maxUsers: true
      }
    });

    if (servers.length > 0) {
      console.log('🖥️ Servidores Emby:');
      servers.forEach((server, index) => {
        console.log(`   ${index + 1}. 🖥️ ${server.name}`);
        console.log(`      🌐 URL: ${server.url}`);
        console.log(`      ✅ Activo: ${server.isActive}`);
        console.log(`      🧪 Test: ${server.isTest}`);
        console.log(`      👥 Max Users: ${server.maxUsers}`);
        console.log('');
      });
    } else {
      console.log('🖥️ No hay servidores Emby configurados\n');
    }

    console.log('✅ Base de datos lista para pruebas reales');
    console.log('🚀 Puedes empezar a agregar servidores y crear demos');

  } catch (error) {
    console.error('❌ Error al verificar estado:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkDatabaseStatus();
