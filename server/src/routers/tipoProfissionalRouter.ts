import { Router } from 'express';
import { createTipoProfissionalController, getAllTipoProfissionalController, getByIdTipoProfissionalController } from '../controller/tipoProfissionalController';

const tipoProfissionalRouter = Router();

/**
 * @swagger
 * /register/tipo-profissional:
 *   post:
 *     summary: Registra um novo tipo de profissional
 *     tags:
 *       - Tipos de Profissionais
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - descricao
 *               - situacao
 *             properties:
 *               descricao:
 *                 type: string
 *                 description: Descrição do tipo de profissional (mínimo 8, máximo 100 caracteres).
 *                 example: Médico
 *               situacao:
 *                 type: string
 *                 description: Situação do tipo de profissional (Ativo ou Inativo).
 *                 example: Ativo
 *     responses:
 *       201:
 *         description: Tipo de profissional registrado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                   example: 1
 *                 descricao:
 *                   type: string
 *                   example: Médico
 *                 situacao:
 *                   type: string
 *                   example: Ativo
 *       400:
 *         description: Dados inválidos. Garantir que os campos 'descricao' e 'situacao' não estão vazios e a descrição tenha entre 8 e 100 caracteres.
 *       500:
 *         description: Erro interno do servidor.
 */
tipoProfissionalRouter.post('/register/tipo-profissional', createTipoProfissionalController);

/**
 * @swagger
 * /tipos-profissionais:
 *   get:
 *     summary: Retorna todos os tipos de profissionais cadastrados
 *     tags:
 *       - Tipos de Profissionais
 *     responses:
 *       200:
 *         description: Lista de tipos de profissionais cadastrados.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                     example: 1
 *                   descricao:
 *                     type: string
 *                     example: Médico
 *                   situacao:
 *                     type: string
 *                     example: Ativo
 *       500:
 *         description: Erro interno do servidor.
 */
tipoProfissionalRouter.get('/tipos-profissionais', getAllTipoProfissionalController);

/**
 * @swagger
 * /tipo-profissional/{id}:
 *   get:
 *     summary: Busca um tipo de profissional pelo ID
 *     tags:
 *       - Tipos de Profissionais
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do tipo de profissional
 *         example: 1
 *     responses:
 *       200:
 *         description: Tipo de profissional encontrado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 descricao:
 *                   type: string
 *                   example: Fisioterapeuta
 *                 situacao:
 *                   type: string
 *                   example: Ativo
 *       404:
 *         description: Tipo de profissional não encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Tipo de profissional não encontrado
 *       500:
 *         description: Erro interno no servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Erro interno ao procurar o tipo profissional.
 */
tipoProfissionalRouter.get('/tipo-profissional/:id', getByIdTipoProfissionalController);

export { tipoProfissionalRouter };
