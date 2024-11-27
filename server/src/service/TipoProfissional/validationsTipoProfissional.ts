import { prisma } from '../../db/prismaClient';
import HttpException from '../../errors/HttpException';
import { ITipoProfissional } from './createTipoProfissionalService';

export const infoEmpty = ({
  descricao,
  situacao,
}: ITipoProfissional): void => {
  if (!descricao || !situacao || descricao.trim().length === 0 || situacao.trim().length === 0) {
    throw new HttpException(400, "Os campos 'descricao' e 'situacao' são obrigatórios e não podem ser vazios.");
  }
};


export const validateDescription = (descricao: string): void => {
  const nomeRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'’-]+$/;

  if (!descricao || descricao.trim().length < 6 || descricao.trim().length > 100) {
    throw new HttpException(400, "A descrição deve ter entre 6 e 100 caracteres.");
  }

  if (!nomeRegex.test(descricao.trim())) {
    throw new HttpException(400, "A descrição contém caracteres inválidos. Apenas letras, espaços e alguns caracteres especiais são permitidos.");
  }
};

export const existTipoProfissional = async (id: string): Promise<ITipoProfissional> => {
  
  const tipoProfissional = await prisma.tipoProfissional.findUnique({
    where: {id: Number(id)},
  });

  if (!tipoProfissional) {
    throw new HttpException(400, "Tipo de profissional não encontrado.");
  }

  return tipoProfissional;
};


