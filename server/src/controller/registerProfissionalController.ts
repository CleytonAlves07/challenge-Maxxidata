import { NextFunction, Request, Response } from 'express';
import { registerProfissionalService } from '../service/Profissional/registerProfissionalService';

export const registerProfissionalController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { nome, telefone, email, situacao, profissionalId } = req.body;

    const { success, profissional } = await registerProfissionalService({
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
