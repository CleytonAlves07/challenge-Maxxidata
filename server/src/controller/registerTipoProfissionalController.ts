import { NextFunction, Request, Response } from 'express';



export const registerTipoProfissionalController = async (req: Request, res: Response, _next: NextFunction) {
  const { descricao, situacao } = req.body;

  const { success, tipoProfissional } = await registerTipoProfissionalService({descricao, situacao});

  res.status(201).json({ message: "Tipo de profissional criado com sucesso!", success, tipoProfissional})
}