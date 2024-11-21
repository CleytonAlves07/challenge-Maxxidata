import { prisma } from '../db/prismaClient';
import HttpException from '../errors/HttpException';

export interface TipoProfissional {
  descricao: string;
  situacao: string;
}

export const registerTipoProfissionalService = async ({ descricao, situacao }: TipoProfissional) => {
  try {
    if (!descricao || !situacao) {
      throw new HttpException(400, "Todos os campos são obrigatórios.");
    }
    const tipoProfissional = await prisma.tipoProfissional.create({
      data: {
        descricao,
        situacao,
      },
    });

    return { success: true, tipoProfissional };
  } catch (error) {
    console.error("Erro ao registrar tipo profissional:", error);
    throw new HttpException(500, "Erro interno ao registrar o tipo profissional.");
  }
};
