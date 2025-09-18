const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function checkNextAuthTables() {
  try {
    console.log('🔍 Verificando tablas de NextAuth...\n');

    // Verificar si existen las tablas de NextAuth
    const tables = [
      'Account',
      'Session', 
      'User',
      'VerificationToken'
    ];

    for (const table of tables) {
      try {
        const count = await prisma[table].count();
        console.log(`✅ Tabla ${table}: ${count} registros`);
      } catch (error) {
        console.log(`❌ Tabla ${table}: No existe o error - ${error.message}`);
      }
    }

    console.log('\n🔍 Verificando sesiones activas...');
    try {
      const sessions = await prisma.Session.findMany({
        include: {
          user: true
        }
      });
      
      console.log(`📊 Sesiones encontradas: ${sessions.length}`);
      sessions.forEach((session, index) => {
        console.log(`   ${index + 1}. Usuario: ${session.user?.email || 'N/A'}`);
        console.log(`      Expira: ${session.expires}`);
        console.log(`      Token: ${session.sessionToken?.substring(0, 20)}...`);
      });
    } catch (error) {
      console.log('❌ Error al verificar sesiones:', error.message);
    }

    console.log('\n🔍 Verificando cuentas...');
    try {
      const accounts = await prisma.Account.findMany({
        include: {
          user: true
        }
      });
      
      console.log(`📊 Cuentas encontradas: ${accounts.length}`);
      accounts.forEach((account, index) => {
        console.log(`   ${index + 1}. Usuario: ${account.user?.email || 'N/A'}`);
        console.log(`      Provider: ${account.provider}`);
        console.log(`      Type: ${account.type}`);
      });
    } catch (error) {
      console.log('❌ Error al verificar cuentas:', error.message);
    }

  } catch (error) {
    console.error('❌ Error general:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkNextAuthTables();
