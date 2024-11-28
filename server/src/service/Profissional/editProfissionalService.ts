import { prisma } from '../../db/prismaClient'
import HttpException from '../../errors/HttpException';
import { IProfissional } from './createProfissionalService';
import { existProfissional, validateEmail, validateNome, validatePhone } from './validationsProfissional';


export const editProfissionalService = async (
  id: string, 
  nome: string, 
  telefone: string, 
  email: string, 
  situacao: string, 
  profissionalId: number
): Promise<IProfissional> => {
  try {

      await existProfissional(id);
      validateNome(nome);
      validatePhone(telefone);
      validateEmail(email);
      
      const profissionalAtualizado = await prisma.profissional.update({
        where: { id: Number(id) },
        data: { nome,
                telefone,
                email,
                situacao,
                profissionalId
              },
      });
      
      return profissionalAtualizado;
    
  } catch (error) {
    if (error instanceof HttpException) {
      throw error;
    }

    console.error("Erro interno ao procurar profissional:", error);
    throw new HttpException(500, "Erro interno ao procurar o tipo profissional.");
  }

  
}