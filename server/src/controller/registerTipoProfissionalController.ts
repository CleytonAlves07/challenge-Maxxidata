import { NextFunction, Request, Response } from 'express';
import { registerTipoProfissionalService } from '../service/registerTipoProfissionalService';

export const registerTipoProfissionalController = async (req: Request, res: Response, _next: NextFunction) => {
  const { descricao, situacao } = req.body;

  if (!descricao || !situacao) {
    res.status(400).json({ error: "Todos os campos são obrigatórios." });
    return;
  }

  try {
    const { success, tipoProfissional } = await registerTipoProfissionalService({ descricao, situacao });

    res.status(201).json({
      message: "Tipo de profissional criado com sucesso!",
      success,
      tipoProfissional,
    });
  } catch (error) {
    console.error("Erro ao criar TipoProfissional:", error);
    res.status(500).json({ error: "Erro ao criar TipoProfissional. Tente novamente." });
  }
};
