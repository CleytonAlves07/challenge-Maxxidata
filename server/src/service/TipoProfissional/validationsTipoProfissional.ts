import HttpException from '../../errors/HttpException';
import { ITipoProfissional } from './createTipoProfissionalService';


export const infoEmpty = async ({
  descricao,
  situacao,
}:ITipoProfissional): Promise<void> => {
  if (!descricao || !situacao) {
      throw new HttpException(400, "Todos os campos são obrigatórios.");
    }
}


export const validateDescription = (descricao: string): void => {
  const nomeRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'’-]+$/;

  if (!descricao || descricao.trim().length < 8 || descricao.trim().length > 100) {
    throw new HttpException(400,"A descricao deve ter entre 8 e 100 caracteres.");
  }

  if (!nomeRegex.test(descricao)) {
    throw new HttpException(400,"A descricao contém caracteres inválidos.");
  }
};




