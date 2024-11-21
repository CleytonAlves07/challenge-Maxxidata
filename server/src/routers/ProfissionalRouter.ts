import { Router } from 'express';
import { createProfissionalController, getAllProfissionalController } from '../controller/profissionalController';

const ProfissionalRouter = Router();

ProfissionalRouter.post('/register/profissional', createProfissionalController);
ProfissionalRouter.get('/profissionais', getAllProfissionalController);


export {ProfissionalRouter}