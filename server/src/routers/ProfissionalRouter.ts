import { Router } from 'express';
import { registerProfissionalController } from '../controller/registerProfissionalController';

const ProfissionalRouter = Router();

ProfissionalRouter.post('/register/profissional', registerProfissionalController);


export {ProfissionalRouter}