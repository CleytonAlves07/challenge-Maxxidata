import { Router } from 'express';
import { createProfissionalController } from '../controller/profissionalController';

const ProfissionalRouter = Router();

ProfissionalRouter.post('/register/profissional', createProfissionalController);


export {ProfissionalRouter}