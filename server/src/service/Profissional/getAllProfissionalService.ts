import { prisma } from '../../db/prismaClient'
import { IProfissional } from './createProfissionalService';


export const getAllProfissionalService = async (): Promise<IProfissional[]> => {
  const profissionais = prisma.profissional.findMany();

  return profissionais;
}