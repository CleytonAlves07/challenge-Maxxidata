import { NextFunction, Request, Response } from 'express';
import { createTipoProfissionalService } from '../service/TipoProfissional/createTipoProfissionalService';
import { getAllTipoProfissionalService } from '../service/TipoProfissional/getAllTipoProfissionalService';

export const createTipoProfissionalController = async (
  req: Request, 
  res: Response, 
  next: NextFunction): Promise<void> => {
  const { descricao, situacao } = req.body;

  try {
    const { success, tipoProfissional } = await createTipoProfissionalService({ descricao, situacao });

    
    res.status(201).json({
      message: "Tipo de profissional criado com sucesso!",
      success,
      tipoProfissional,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllTipoProfissionalController = async (_req: Request, res: Response, _next: NextFunction) => {
  const tiposProfissionais = await getAllTipoProfissionalService();

  res.status(200).json(tiposProfissionais);
}
