import { Router } from 'express';
import { createTipoProfissionalController } from '../controller/tipoProfissionalController';



const tipoProfissionalRouter = Router();

tipoProfissionalRouter.post('/register/tipo-profissional', createTipoProfissionalController);


export {tipoProfissionalRouter}