import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed de datos de prueba...');

  // 0. Crear usuarios del panel de administración primero
  console.log('👤 Creando usuarios del panel...');
  const adminUser = await prisma.user.create({
    data: {
      email: 'admin@emby-system.com',
      hashedPassword: await bcrypt.hash('admin123', 12),
      role: 'SUPER_ADMIN',
      isActive: true,
    }
  });

  const resellerUser = await prisma.user.create({
    data: {
      email: 'reseller@emby-system.com',
      hashedPassword: await bcrypt.hash('reseller123', 12),
      role: 'PREMIUM_RESELLER',
      isActive: true,
    }
  });

  console.log(`✅ Creados usuarios del panel`);

  // 1. Crear 5 servidores simulados
  console.log('📡 Creando servidores simulados...');
  const servers = await Promise.all([
    prisma.embyServer.create({
      data: {
        id: 'emby001',
        name: 'EMBY001 - Servidor Principal',
        url: 'https://emby001.example.com',
        apiKey: 'test-api-key-001',
        maxUsers: 100,
        isActive: true,
        userId: adminUser.id,
      }
    }),
    prisma.embyServer.create({
      data: {
        id: 'emby002',
        name: 'EMBY002 - Servidor Secundario',
        url: 'https://emby002.example.com',
        apiKey: 'test-api-key-002',
        maxUsers: 150,
        isActive: true,
        userId: adminUser.id,
      }
    }),
    prisma.embyServer.create({
      data: {
        id: 'emby003',
        name: 'EMBY003 - Servidor HD',
        url: 'https://emby003.example.com',
        apiKey: 'test-api-key-003',
        maxUsers: 80,
        isActive: true,
        userId: resellerUser.id,
      }
    }),
    prisma.embyServer.create({
      data: {
        id: 'emby004',
        name: 'EMBY004 - Servidor 4K',
        url: 'https://emby004.example.com',
        apiKey: 'test-api-key-004',
        maxUsers: 50,
        isActive: true,
        userId: resellerUser.id,
      }
    }),
    prisma.embyServer.create({
      data: {
        id: 'emby005',
        name: 'EMBY005 - Servidor Premium',
        url: 'https://emby005.example.com',
        apiKey: 'test-api-key-005',
        maxUsers: 200,
        isActive: true,
        userId: adminUser.id,
      }
    }),
  ]);

  console.log(`✅ Creados ${servers.length} servidores`);

  // 2. Crear librerías para cada servidor
  console.log('📚 Creando librerías para servidores...');
  const libraries = [];
  
  for (const server of servers) {
    const serverLibraries = await Promise.all([
      prisma.library.create({
        data: {
          name: `Películas ${server.name}`,
          embyId: `${server.id}-movies`,
          serverId: server.id,
        }
      }),
      prisma.library.create({
        data: {
          name: `Series ${server.name}`,
          embyId: `${server.id}-shows`,
          serverId: server.id,
        }
      }),
      prisma.library.create({
        data: {
          name: `Música ${server.name}`,
          embyId: `${server.id}-music`,
          serverId: server.id,
        }
      }),
    ]);
    libraries.push(...serverLibraries);
  }

  console.log(`✅ Creadas ${libraries.length} librerías`);

  // 3. Crear 10 paquetes (2 por servidor)
  console.log('📦 Creando paquetes...');
  const packages = [];
  
  const packageTypes = [
    { name: 'FHD001 - Full HD Básico', description: 'Paquete básico Full HD con películas y series' },
    { name: 'FHD002 - Full HD Premium', description: 'Paquete premium Full HD con contenido exclusivo' },
    { name: '4K001 - Ultra HD Básico', description: 'Paquete básico 4K con películas y series' },
    { name: '4K002 - Ultra HD Premium', description: 'Paquete premium 4K con contenido exclusivo' },
    { name: 'PRE001 - Premium Complete', description: 'Paquete completo con todos los contenidos' },
    { name: 'PRE002 - Premium Family', description: 'Paquete familiar con contenido para todas las edades' },
    { name: 'SPO001 - Sports Premium', description: 'Paquete deportivo con eventos en vivo' },
    { name: 'SPO002 - Sports Complete', description: 'Paquete deportivo completo con archivos históricos' },
    { name: 'MUS001 - Music Premium', description: 'Paquete musical premium con alta calidad' },
    { name: 'MUS002 - Music Complete', description: 'Paquete musical completo con todos los géneros' },
  ];

  for (let i = 0; i < servers.length; i++) {
    const server = servers[i];
    const package1 = packageTypes[i * 2];
    const package2 = packageTypes[i * 2 + 1];

    // Crear paquetes
    const pkg1 = await prisma.package.create({
      data: {
        name: package1.name,
        description: package1.description,
        serverId: server.id,
        userId: server.userId, // Usar el mismo usuario que creó el servidor
      }
    });

    const pkg2 = await prisma.package.create({
      data: {
        name: package2.name,
        description: package2.description,
        serverId: server.id,
        userId: server.userId,
      }
    });

    // Conectar librerías a los paquetes
    const serverLibraries = libraries.filter(lib => lib.serverId === server.id);
    
    for (const lib of serverLibraries) {
      await prisma.packageLibrary.create({
        data: {
          packageId: pkg1.id,
          libraryId: lib.id,
        }
      });
      await prisma.packageLibrary.create({
        data: {
          packageId: pkg2.id,
          libraryId: lib.id,
        }
      });
    }

    packages.push(pkg1, pkg2);
  }

  console.log(`✅ Creados ${packages.length} paquetes`);

  // 4. Crear política global estándar
  console.log('📋 Creando política global...');
  const globalPolicy = await prisma.policy.create({
    data: {
      name: 'Política Estándar Global',
      description: 'Política estándar que permite acceso básico a todos los servidores',
      isGlobal: true,
      allowCameraUpload: false,
      allowPasswordChange: false,
      allowTranscoding: true,
      allowRemuxing: true,
      allowAudioTranscoding: true,
      enableNotifications: false,
      userId: adminUser.id,
    }
  });

  console.log(`✅ Creada política global: ${globalPolicy.name}`);

  // 5. Crear 10 cuentas demo
  console.log('🎭 Creando cuentas demo...');
  const demos = [];
  
  for (let i = 1; i <= 10; i++) {
    const server = servers[Math.floor(Math.random() * servers.length)];
    const expirationDate = new Date();
    expirationDate.setHours(expirationDate.getHours() + 24); // 24 horas de demo

    const demo = await prisma.demo.create({
      data: {
        email: `demo${i.toString().padStart(2, '0')}@example.com`,
        password: `demo${i}pass`,
        embyUserName: `Demo User ${i}`,
        serverId: server.id,
        hoursDuration: 24,
        expirationDate,
        isActive: true,
        userId: adminUser.id, // Asignar al admin
      }
    });

    demos.push(demo);
  }

  console.log(`✅ Creadas ${demos.length} cuentas demo`);

  // 6. Crear 50 cuentas de usuario
  console.log('👥 Creando cuentas de usuario...');
  const userAccounts = [];
  
  for (let i = 1; i <= 50; i++) {
    const server = servers[Math.floor(Math.random() * servers.length)];
    
    // Crear fecha de expiración aleatoria (entre 1 día y 365 días)
    const expirationDate = new Date();
    const daysToAdd = Math.floor(Math.random() * 365) + 1;
    expirationDate.setDate(expirationDate.getDate() + daysToAdd);

    // Crear cuenta Emby
    const userAccount = await prisma.embyAccount.create({
      data: {
        embyUserId: `user_${i.toString().padStart(3, '0')}`,
        embyUserName: `Usuario ${i}`,
        embyUserEmail: `usuario${i.toString().padStart(2, '0')}@example.com`,
        serverId: server.id,
        isActive: true,
        userId: adminUser.id, // Asignar al admin
      }
    });

    // Crear enlace usuario-servidor
    const userServerLink = await prisma.userServerLink.create({
      data: {
        userId: userAccount.id,
        serverId: server.id,
        isDemo: false,
        expirationDate,
        creditType: Math.random() > 0.5 ? 'ONE_CONNECTION' : 'TWO_CONNECTIONS',
        credits: Math.floor(Math.random() * 10) + 1,
      }
    });

    userAccounts.push(userAccount);
  }

  console.log(`✅ Creadas ${userAccounts.length} cuentas de usuario`);

  // 7. Estadísticas finales
  console.log('\n📊 Resumen de datos creados:');
  console.log(`- Servidores: ${servers.length}`);
  console.log(`- Librerías: ${libraries.length}`);
  console.log(`- Paquetes: ${packages.length}`);
  console.log(`- Políticas: 1 (global)`);
  console.log(`- Usuarios del panel: 2`);
  console.log(`- Cuentas demo: ${demos.length}`);
  console.log(`- Cuentas de usuario: ${userAccounts.length}`);
  
  console.log('\n🎉 ¡Seed completado exitosamente!');
  console.log('\n🔑 Credenciales de acceso:');
  console.log('Admin: admin@emby-system.com / admin123');
  console.log('Reseller: reseller@emby-system.com / reseller123');
}

main()
  .catch((e) => {
    console.error('❌ Error durante el seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
