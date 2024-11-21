import { prisma } from '../db/prismaClient';

export interface Profissional {
  nome: string;
  telefone: string;
  email: string;
  situacao: string;
  profissionalId: number;
}

export const registerProfissionalService = async ({
  nome,
  telefone,
  email,
  situacao,
  profissionalId,
}: Profissional) => {
  try {
    const profissional = await prisma.profissional.create({
      data: {
        nome,
        telefone,
        email,
        situacao,
        profissionalId,
      },
    });

    return { success: true, profissional };
  } catch (error) {
    console.error('Erro ao registrar profissional:', error);
    return { success: false, error: 'Erro ao registrar profissional.' };
  }
};
