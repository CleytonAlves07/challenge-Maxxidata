import { prisma } from '../../db/prismaClient';
import HttpException from '../../errors/HttpException';
import { infoEmpty, validateEmail, validateNome, validatePhone } from './validationsProfissional';

export interface IProfissional {
  nome: string;
  telefone: string;
  email: string;
  situacao: string;
  profissionalId: number;
}

export const createProfissionalService = async ({
  nome,
  telefone,
  email,
  situacao,
  profissionalId,
}: IProfissional) => {
  try {
    await Promise.all([
      infoEmpty({ nome, telefone, email, situacao, profissionalId }),
      validateNome(nome),
      validatePhone(telefone),
      validateEmail(email)
      
    ]);
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
    if (error instanceof HttpException) {
      throw error;
    }

    console.error("Erro interno ao registrar profissional:", error);
    throw new HttpException(500, "Erro interno ao registrar o profissional.");
  }
};
