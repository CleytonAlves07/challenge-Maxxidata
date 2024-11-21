import { prisma } from '../db/prismaClient';
import HttpException from '../errors/HttpException';

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
    if (!nome || !telefone || !email || !situacao || !profissionalId) {
      throw new HttpException(400,"Todos os campos são obrigatórios.");
    }
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
    console.error("Erro ao registrar profissional:", error);
    throw new HttpException(500, "Erro interno ao registrar o profissional.");
  }
};
