import { Router } from 'express';
import { createTipoProfissionalController, getAllTipoProfissionalController, getByIdTipoProfissionalController, deleteTipoProfissionalController } from '../controller/tipoProfissionalController';

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
 *                 description: Descrição do tipo de profissional (mínimo 6, máximo 100 caracteres).
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
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 tipoProfissional:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: number
 *                       example: 1
 *                     descricao:
 *                       type: string
 *                       example: Médico
 *                     situacao:
 *                       type: string
 *                       example: Ativo
 *       400:
 *         description: Dados inválidos. Garantir que os campos 'descricao' e 'situacao' não estão vazios e a descrição tenha entre 6 e 100 caracteres.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: A descrição deve ter entre 6 e 100 caracteres.
 *       500:
 *         description: Erro interno do servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Erro interno ao registrar o tipo profissional.
 */
tipoProfissionalRouter.post('/register/tipo-profissional', createTipoProfissionalController);

/**
 * @swagger
 * /tipos-profissionais:
 *   get:
 *     summary: Retorna todos os tipos de profissionais
 *     tags:
 *       - Tipos de Profissionais
 *     responses:
 *       200:
 *         description: Lista de tipos de profissionais.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: number
 *                         example: 1
 *                       descricao:
 *                         type: string
 *                         example: Médico
 *                       situacao:
 *                         type: string
 *                         example: Ativo
 *       404:
 *         description: Não há tipos de profissionais cadastrados.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Não existe registro de tipos de profissionais.
 *       500:
 *         description: Erro interno ao consultar os tipos de profissionais.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Erro interno ao consultar os tipos de profissionais.
 */

tipoProfissionalRouter.get('/tipos-profissionais', getAllTipoProfissionalController);

/**
 * @swagger
 * /tipos-profissionais/{id}:
 *   get:
 *     summary: Retorna um tipo de profissional pelo ID
 *     tags:
 *       - Tipos de Profissionais
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do tipo de profissional
 *         schema:
 *           type: string
 *           example: "1"
 *     responses:
 *       200:
 *         description: Tipo de profissional encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: number
 *                       example: 1
 *                     descricao:
 *                       type: string
 *                       example: Médico
 *                     situacao:
 *                       type: string
 *                       example: Ativo
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
 *         description: Erro interno ao procurar o tipo de profissional.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Erro interno ao procurar o tipo de profissional.
 */

tipoProfissionalRouter.get('/tipo-profissional/:id', getByIdTipoProfissionalController);

/**
 * @swagger
 * /tipo-profissional/{id}:
 *   delete:
 *     summary: Deleta um tipo de profissional pelo ID
 *     tags:
 *       - Tipos de Profissionais
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do tipo de profissional a ser deletado
 *         example: 1
 *     responses:
 *       200:
 *         description: Tipo de profissional deletado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Tipo de profissional deletado com sucesso.
 *       404:
 *         description: Tipo de profissional não encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Tipo de profissional não encontrado.
 *       500:
 *         description: Erro interno no servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Erro interno ao deletar o tipo profissional.
 */
tipoProfissionalRouter.delete('/tipo-profissional/:id', deleteTipoProfissionalController);

export { tipoProfissionalRouter };
