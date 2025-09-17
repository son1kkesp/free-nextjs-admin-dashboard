const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function createAdmin() {
  try {
    const email = 'admin@emby.com'
    const password = 'admin123'
    const role = 'SUPER_ADMIN'

    // Verificar si el usuario ya existe
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      console.log('✅ Usuario administrador ya existe:', email)
      return
    }

    // Hash de la contraseña
    const hashedPassword = await bcrypt.hash(password, 12)

    // Crear usuario administrador
    const admin = await prisma.user.create({
      data: {
        email,
        hashedPassword,
        role,
        isActive: true
      }
    })

    console.log('✅ Usuario administrador creado exitosamente:')
    console.log('📧 Email:', email)
    console.log('🔑 Contraseña:', password)
    console.log('👑 Rol:', role)
    console.log('🆔 ID:', admin.id)

  } catch (error) {
    console.error('❌ Error al crear usuario administrador:', error)
  } finally {
    await prisma.$disconnect()
  }
}

createAdmin()
