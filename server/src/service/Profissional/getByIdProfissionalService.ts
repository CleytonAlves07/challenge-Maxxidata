import { prisma } from '../../db/prismaClient'
import HttpException from '../../errors/HttpException';
import { IProfissional } from './createProfissionalService';


export const getByIdProfissionalService = async (id: string): Promise<IProfissional> => {
  try {
    console.log("tipo id Service:", typeof(id));
    const profissional = await prisma.profissional.findUnique({
    where: {
      id: Number(id),
    }
    });
    
    console.log("profissional:", profissional);
    
  if (!profissional) {
      throw new HttpException(404,"Profissional não encontrado");
  }
    
    return profissional;
    
  } catch (error) {
    if (error instanceof HttpException) {
      throw error;
    }

    console.error("Erro interno ao procurar profissional:", error);
    throw new HttpException(500, "Erro interno ao procurar o profissional.");
  }

  
}