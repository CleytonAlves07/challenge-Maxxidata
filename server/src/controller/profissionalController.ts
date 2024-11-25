import { NextFunction, Request, Response } from 'express';
import { createProfissionalService, IProfissional } from '../service/Profissional/createProfissionalService';
import { getAllProfissionalService } from '../service/Profissional/getAllProfissionalService';
import { getByIdProfissionalService } from '../service/Profissional/getByIdProfissionalService';

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

    res.status(201).json({ message: "Profissional criado com sucesso!", profissional, success });
  } catch (error) {
    next(error);
  }
};

export const getAllProfissionalController = async (_req: Request, res: Response, _next: NextFunction) => {
  const profissionais = await getAllProfissionalService();

  res.status(200).json(profissionais);
}

export const getByIdProfissionalController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    console.log('id controller:', id);

    const profissional = await getByIdProfissionalService(id);
    
    res.status(200).json(profissional);

  } catch (error) {
    next(error);
  }
}
