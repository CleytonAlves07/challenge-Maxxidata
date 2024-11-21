import HttpException from '../../errors/HttpException';
import { IProfissional } from './createProfissionalService';


export const infoEmpty = async ({
  nome,
  telefone,
  email,
  situacao,
  profissionalId
}: IProfissional): Promise<void> => {
  if (!nome || !telefone || !email || !situacao || !profissionalId) {
      throw new HttpException(400,"Todos os campos são obrigatórios.");
    }
}


export const validateNome = (nome: string): void => {
  const nomeRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'’-]+$/;

  if (!nome || nome.trim().length < 2 || nome.trim().length > 100) {
    throw new HttpException(400,"O nome deve ter entre 2 e 100 caracteres.");
  }

  if (!nomeRegex.test(nome)) {
    throw new HttpException(400,"O nome contém caracteres inválidos.");
  }

  const formattedNome = nome.trim().replace(/\s+/g, " ");
  if (formattedNome.split(" ").length < 2) {
    throw new HttpException(400,"O nome deve incluir pelo menos um sobrenome.");
  }
};


export const validatePhone = async (telefone: string): Promise<void> => {
  
const telefoneRegex = /^(\+?55\s?)?(\(?\d{2}\)?\s?)?9?\d{4}-?\d{4}$/;

  if (!telefoneRegex.test(telefone)) {
    throw new HttpException(400, "Formato de telefone inválido!Exemplo válido: (11) 98765-4321");
    
  }
}

export const validateEmail = async (email: string): Promise<void> => {
  
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailRegex.test(email)) {
    throw new HttpException(400, "Formato de email inválido!")
  }
}



