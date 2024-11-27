import { prisma } from '../../db/prismaClient'
import HttpException from '../../errors/HttpException';
import { ITipoProfissional } from './createTipoProfissionalService';
import { existTipoProfissional } from './validationsTipoProfissional';



export const editTipoProfissionalService = async (id: string, descricao: string, situacao: string): Promise<ITipoProfissional> => {
  try {
      const tipoProfissional = await existTipoProfissional(id);
      
      const tipoAtualizado = await prisma.tipoProfissional.update({
        where: { id: Number(id) },
        data: { descricao, situacao },
      });
      
      return tipoAtualizado;
    
  } catch (error) {
    if (error instanceof HttpException) {
      throw error;
    }

    console.error("Erro interno ao procurar profissional:", error);
    throw new HttpException(500, "Erro interno ao procurar o tipo profissional.");
  }

  
}