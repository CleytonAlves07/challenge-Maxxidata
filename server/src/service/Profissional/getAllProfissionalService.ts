import { prisma } from '../../db/prismaClient'
import HttpException from '../../errors/HttpException';
import { IProfissional } from './createProfissionalService';


export const getAllProfissionalService = async (): Promise<IProfissional[]> => {
  const profissionais = prisma.profissional.findMany();

  if (!profissionais) {
      throw new HttpException(404,"Não existe registro de profissionais.");
  }

  return profissionais;
}