import { prisma } from '../../db/prismaClient'
import { ITipoProfissional } from './createTipoProfissionalService';


export const getAllTipoProfissionalService = async (): Promise<ITipoProfissional[]> => {
  const tiposProfissionais = prisma.tipoProfissional.findMany();

  return tiposProfissionais;
}