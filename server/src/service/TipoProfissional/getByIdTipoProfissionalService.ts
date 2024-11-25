import { prisma } from '../../db/prismaClient'
import HttpException from '../../errors/HttpException';
import { ITipoProfissional } from './createTipoProfissionalService';



export const getByIdTipoProfissionalService = async (id: string): Promise<ITipoProfissional> => {
  try {
    const tipoProfissional = await prisma.tipoProfissional.findUnique({
    where: {
      id: Number(id),
    }
    });
    
    
  if (!tipoProfissional) {
      throw new HttpException(404,"Tipo de profissional não encontrado");
  }
    
    return tipoProfissional;
    
  } catch (error) {
    if (error instanceof HttpException) {
      throw error;
    }

    console.error("Erro interno ao procurar profissional:", error);
    throw new HttpException(500, "Erro interno ao procurar o tipo profissional.");
  }

  
}