import { prisma } from '../../db/prismaClient';
import HttpException from '../../errors/HttpException';
import { infoEmpty, validateDescription } from './validationsTipoProfissional';

export interface ITipoProfissional {
  descricao: string;
  situacao: string;
}

export const createTipoProfissionalService = async ({ descricao, situacao }: ITipoProfissional) => {
  try {
    await Promise.all([
      infoEmpty({ descricao, situacao }),
      validateDescription(descricao)
    ])
   
    const tipoProfissional = await prisma.tipoProfissional.create({
      data: {
        descricao,
        situacao,
      },
    });

    return { success: true, tipoProfissional };
  } catch (error) {
     if (error instanceof HttpException) {
      throw error;
     }
    
    console.error("Erro ao registrar tipo profissional:", error);
    throw new HttpException(500, "Erro interno ao registrar o tipo profissional.");
  }
};
