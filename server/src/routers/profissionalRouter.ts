import { Router } from 'express';
import { 
  createProfissionalController, 
  deleteProfissionalController, 
  editProfissionalController, 
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
 *       404:
 *         description: Não há profissionais cadastrados.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Não existe registro de profissionais.
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

/**
 * @swagger
 * /profissional/{id}:
 *   delete:
 *     summary: Exclui um profissional por ID
 *     tags:
 *       - Profissionais
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do profissional a ser excluído
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Profissional deletado com sucesso.
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
 *                   example: "Profissional deletado com sucesso."
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
 *                   example: "Erro interno ao deletar o profissional."
 */
profissionalRouter.delete('/profissional/:id', deleteProfissionalController);

/**
 * @swagger
 * /profissional/{id}:
 *   put:
 *     summary: Edita informações de um profissional por ID
 *     tags:
 *       - Profissionais
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do profissional a ser editado
 *         schema:
 *           type: string
 *           example: "3"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: Nome completo do profissional
 *                 example: João da Silva
 *               telefone:
 *                 type: string
 *                 description: Telefone de contato do profissional
 *                 example: "(11) 98765-4321"
 *               email:
 *                 type: string
 *                 description: Email do profissional
 *                 example: joao.silva@email.com
 *               situacao:
 *                 type: string
 *                 description: Situação atual do profissional
 *                 example: ativo
 *               profissionalId:
 *                 type: integer
 *                 description: ID do tipo de profissional associado
 *                 example: 1
 *     responses:
 *       200:
 *         description: Profissional editado com sucesso.
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
 *                   example: "Profissional editado com sucesso."
 *                 profissional:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 3
 *                     nome:
 *                       type: string
 *                       example: João Silva
 *                     telefone:
 *                       type: string
 *                       example: "11987654321"
 *                     email:
 *                       type: string
 *                       example: joao.silva@example.com
 *                     situacao:
 *                       type: string
 *                       example: inativo
 *                     profissionalId:
 *                       type: integer
 *                       example: 1
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-11-21T10:34:46.284Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-11-28T13:10:34.159Z"
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
 *                   example: "Erro interno ao editar o profissional."
 */

profissionalRouter.put('/profissional/:id', editProfissionalController);

export { profissionalRouter };
