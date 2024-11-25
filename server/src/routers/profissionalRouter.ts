import { Router } from 'express';
import { 
  createProfissionalController, 
  getAllProfissionalController, 
  getByIdProfissionalController 
} from '../controller/profissionalController';

const profissionalRouter = Router();

/**
 * @swagger
 * /register/profissional:
 *   post:
 *     summary: Registra um novo profissional
 *     tags:
 *       - Profissionais
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: João Silva
 *               telefone:
 *                 type: string
 *                 example: "(11) 98765-4321"
 *               email:
 *                 type: string
 *                 example: joao.silva@email.com
 *               situacao:
 *                 type: string
 *                 example: "Ativo"
 *               profissionalId:
 *                 type: number
 *                 example: 1
 *     responses:
 *       201:
 *         description: Profissional registrado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 profissional:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: number
 *                       example: 1
 *                     nome:
 *                       type: string
 *                       example: João Silva
 *                     telefone:
 *                       type: string
 *                       example: "(11) 98765-4321"
 *                     email:
 *                       type: string
 *                       example: joao.silva@email.com
 *                     situacao:
 *                       type: string
 *                       example: "Ativo"
 *       400:
 *         description: Dados inválidos ou já existentes.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Já existe um profissional com o mesmo email ou telefone."
 *       500:
 *         description: Erro interno do servidor.
 */
profissionalRouter.post('/register/profissional', createProfissionalController);

/**
 * @swagger
 * /profissionais:
 *   get:
 *     summary: Retorna todos os profissionais cadastrados
 *     tags:
 *       - Profissionais
 *     responses:
 *       200:
 *         description: Lista de profissionais.
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
 *                   nome:
 *                     type: string
 *                     example: João Silva
 *                   telefone:
 *                     type: string
 *                     example: "(11) 98765-4321"
 *                   email:
 *                     type: string
 *                     example: joao.silva@email.com
 *                   situacao:
 *                     type: string
 *                     example: "Ativo"
 *       500:
 *         description: Erro interno do servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Erro interno ao carregar os profissionais."
 */
profissionalRouter.get('/profissionais', getAllProfissionalController);

/**
 * @swagger
 * /profissional/{id}:
 *   get:
 *     summary: Retorna detalhes de um profissional por ID
 *     tags:
 *       - Profissionais
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do profissional a ser consultado
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Detalhes do profissional encontrados com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                   example: 1
 *                 nome:
 *                   type: string
 *                   example: João Silva
 *                 telefone:
 *                   type: string
 *                   example: "(11) 98765-4321"
 *                 email:
 *                   type: string
 *                   example: joao.silva@email.com
 *                 situacao:
 *                   type: string
 *                   example: "Ativo"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-11-25T12:34:56.789Z"
 *       404:
 *         description: Profissional não encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Profissional não encontrado."
 *       500:
 *         description: Erro interno do servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Erro interno ao procurar o profissional."
 */
profissionalRouter.get('/profissional/:id', getByIdProfissionalController);

export { profissionalRouter };
