import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const userId = params.id;

    // Buscar el UserServerLink
    const userServerLink = await prisma.userServerLink.findUnique({
      where: {
        id: userId,
      },
      include: {
        server: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    if (!userServerLink) {
      return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
    }

    // Buscar la cuenta de Emby asociada
    const embyAccount = await prisma.embyAccount.findUnique({
      where: {
        id: userServerLink.userId,
      },
    });

    if (!embyAccount) {
      return NextResponse.json({ error: 'Cuenta de Emby no encontrada' }, { status: 404 });
    }

    return NextResponse.json({
      password: embyAccount.password || '',
    });

  } catch (error) {
    console.error('Error obteniendo contraseña:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
