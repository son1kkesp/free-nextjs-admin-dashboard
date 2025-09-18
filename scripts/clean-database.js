const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function cleanDatabase() {
  console.log('🧹 Iniciando limpieza de la base de datos...\n');

  try {
    // 1. Eliminar UserServerLinks (relaciones)
    console.log('1️⃣ Eliminando UserServerLinks...');
    const deletedUserServerLinks = await prisma.userServerLink.deleteMany({});
    console.log(`   ✅ Eliminados ${deletedUserServerLinks.count} UserServerLinks\n`);

    // 2. Eliminar EmbyAccounts
    console.log('2️⃣ Eliminando EmbyAccounts...');
    const deletedEmbyAccounts = await prisma.embyAccount.deleteMany({});
    console.log(`   ✅ Eliminados ${deletedEmbyAccounts.count} EmbyAccounts\n`);

    // 3. Eliminar Demos
    console.log('3️⃣ Eliminando Demos...');
    const deletedDemos = await prisma.demo.deleteMany({});
    console.log(`   ✅ Eliminados ${deletedDemos.count} Demos\n`);

    // 4. Eliminar Packages
    console.log('4️⃣ Eliminando Packages...');
    const deletedPackages = await prisma.package.deleteMany({});
    console.log(`   ✅ Eliminados ${deletedPackages.count} Packages\n`);

    // 5. Eliminar PackageLibraries
    console.log('5️⃣ Eliminando PackageLibraries...');
    const deletedPackageLibraries = await prisma.packageLibrary.deleteMany({});
    console.log(`   ✅ Eliminados ${deletedPackageLibraries.count} PackageLibraries\n`);

    // 6. Eliminar Libraries
    console.log('6️⃣ Eliminando Libraries...');
    const deletedLibraries = await prisma.library.deleteMany({});
    console.log(`   ✅ Eliminados ${deletedLibraries.count} Libraries\n`);

    // 7. Eliminar Policies
    console.log('7️⃣ Eliminando Policies...');
    const deletedPolicies = await prisma.policy.deleteMany({});
    console.log(`   ✅ Eliminados ${deletedPolicies.count} Policies\n`);

    // 8. Eliminar EmbyServers
    console.log('8️⃣ Eliminando EmbyServers...');
    const deletedEmbyServers = await prisma.embyServer.deleteMany({});
    console.log(`   ✅ Eliminados ${deletedEmbyServers.count} EmbyServers\n`);

    // 9. Eliminar Users (excepto el admin)
    console.log('9️⃣ Eliminando Users (excepto admin)...');
    const deletedUsers = await prisma.user.deleteMany({
      where: {
        email: {
          not: 'admin@emby.com'
        }
      }
    });
    console.log(`   ✅ Eliminados ${deletedUsers.count} Users\n`);

    // 10. Verificar estado final
    console.log('🔍 Verificando estado final...');
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

    console.log('\n📊 Estado final de la base de datos:');
    console.log(`   👤 Users: ${counts.users}`);
    console.log(`   🖥️  EmbyServers: ${counts.embyServers}`);
    console.log(`   🎬 Demos: ${counts.demos}`);
    console.log(`   👥 EmbyAccounts: ${counts.embyAccounts}`);
    console.log(`   🔗 UserServerLinks: ${counts.userServerLinks}`);
    console.log(`   📦 Packages: ${counts.packages}`);
    console.log(`   📚 Libraries: ${counts.libraries}`);
    console.log(`   📋 Policies: ${counts.policies}`);

    console.log('\n✅ ¡Limpieza completada exitosamente!');
    console.log('🚀 La base de datos está lista para pruebas reales.');

  } catch (error) {
    console.error('❌ Error durante la limpieza:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Ejecutar limpieza
cleanDatabase()
  .then(() => {
    console.log('\n🎉 Proceso completado exitosamente');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n💥 Error en el proceso:', error);
    process.exit(1);
  });
