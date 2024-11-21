import { NextFunction, Request, Response } from 'express';
import { registerProfissionalService } from '../service/registerProfissionalService';

export const registerProfissionalController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { nome, telefone, email, situacao, profissionalId } = req.body;

    if (!nome || !telefone || !email || !situacao || !profissionalId) {
      res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
      return;
    }

    const { success, profissional, error } = await registerProfissionalService({
      nome,
      telefone,
      email,
      situacao,
      profissionalId,
    });

    if (!success) {
      res.status(500).json({ error });
      return;
    }

    res.status(201).json({ message: 'Profissional criado com sucesso!', profissional, success });
  } catch (err) {
    next(err); // Passa o erro para o middleware global
  }
};
