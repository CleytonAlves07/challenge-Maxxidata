import { NextFunction, Request, Response } from 'express';
import { createProfissionalService } from '../service/Profissional/createProfissionalService';
import { getAllProfissionalService } from '../service/Profissional/getAllProfissionalService';
import { getByIdProfissionalService } from '../service/Profissional/getByIdProfissionalService';
import { deleteProfissionalService } from '../service/Profissional/deleteProfissionalService';

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

export const getAllProfissionalController = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const profissionais = await getAllProfissionalService();

    res.status(200).json({
      success: true,
      profissionais
    });
  } catch (error) {
    next(error);
  }
}

export const getByIdProfissionalController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const profissional = await getByIdProfissionalService(id);
    
    res.status(200).json({
      success: true,
      profissional
    });

  } catch (error) {
    next(error);
  }
}
export const deleteProfissionalController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    await deleteProfissionalService(id);
    
    res.status(200).json({
      success: true,
      message: "Profissional deletado com sucesso."
    });

  } catch (error) {
    next(error);
  }
}
