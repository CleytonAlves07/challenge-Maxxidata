import { prisma } from '../db/prismaClient';

export interface TipoProfissional {
  descricao: string;
  situacao: string;
}

export const registerTipoProfissionalService = async ({ descricao, situacao }: TipoProfissional) => {
  try {
    const tipoProfissional = await prisma.tipoProfissional.create({
      data: {
        descricao,
        situacao,
      },
    });

    return { success: true, tipoProfissional };
  } catch (error) {
    console.error("Erro ao registrar TipoProfissional:", error);
    throw new Error("Não foi possível registrar o TipoProfissional.");
  }
};
