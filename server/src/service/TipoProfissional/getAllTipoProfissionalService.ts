import { prisma } from '../../db/prismaClient'
import HttpException from '../../errors/HttpException';
import { ITipoProfissional } from './createTipoProfissionalService';


export const getAllTipoProfissionalService = async (): Promise<ITipoProfissional[]> => {
  const tiposProfissionais = prisma.tipoProfissional.findMany();

  if (!tiposProfissionais) {
      throw new HttpException(404,"Não existe registro de tipos de profissionais.");
  }

  return tiposProfissionais;
}