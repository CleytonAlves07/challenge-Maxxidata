import { NextFunction, Request, Response } from 'express';
import { registerTipoProfissionalService } from '../service/TipoProfissional/createTipoProfissionalService';

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
