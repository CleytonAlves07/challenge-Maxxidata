import { NextFunction, Request, Response } from 'express';
import { createProfissionalService } from '../service/Profissional/createProfissionalService';

export const createProfissionalController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { nome, telefone, email, situacao, profissionalId } = req.body;

    const { success, profissional } = await createProfissionalService({
      nome,
      telefone,
      email,
      situacao,
      profissionalId,
    });

    res.status(201).json({ message: 'Profissional criado com sucesso!', profissional, success });
  } catch (error) {
    next(error);
  }
};
