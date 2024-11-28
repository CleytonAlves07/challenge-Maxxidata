import { prisma } from '../../db/prismaClient';
import HttpException from '../../errors/HttpException';
import { IProfissional } from './createProfissionalService';

export const infoEmpty = ({
  nome,
  telefone,
  email,
  situacao,
  profissionalId,
}: IProfissional): void => {
  if (!nome) throw new HttpException(400, "O campo 'nome' é obrigatório.");
  if (!telefone) throw new HttpException(400, "O campo 'telefone' é obrigatório.");
  if (!email) throw new HttpException(400, "O campo 'email' é obrigatório.");
  if (!situacao) throw new HttpException(400, "O campo 'situação' é obrigatório.");
  if (!profissionalId) throw new HttpException(400, "O campo 'profissionalId' é obrigatório.");
};

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

export const validatePhone = (telefone: string): void => {
  const telefoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;

  if (!telefoneRegex.test(telefone)) {
    throw new HttpException(
      400,
      "Formato de telefone inválido! Exemplos válidos: (11) 98765-4321 ou 11987654321."
    );
  }
};

export const validateEmail = (email: string): void => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailRegex.test(email)) {
    throw new HttpException(400, "Formato de email inválido!");
  }
};

export const existProfissional = async (id: string): Promise<void> => {
  
  const profissional = await prisma.profissional.findUnique({
    where: {id: Number(id)},
  });

  if (!profissional) {
    throw new HttpException(404, "Profissional não encontrado.");
  }

};

