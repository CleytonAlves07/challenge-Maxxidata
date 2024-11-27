import { prisma } from '../../db/prismaClient'
import HttpException from '../../errors/HttpException';


export const deleteTipoProfissionalService = async (id: string): Promise<void> => {
  try {
    const tipoProfissional = await prisma.tipoProfissional.findUnique({
    where: {
      id: Number(id),
    }
    });
    
    
  if (!tipoProfissional) {
      throw new HttpException(404,"Tipo de profissional não encontrado");
  }
    
    await prisma.tipoProfissional.delete({
      where: {
        id: Number(id),
      }
    });
    
  } catch (error) {
    if (error instanceof HttpException) {
      throw error;
    }

    console.error("Erro interno ao procurar profissional:", error);
    throw new HttpException(500, "Erro interno ao procurar o tipo profissional.");
  }

  
}