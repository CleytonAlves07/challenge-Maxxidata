import { Router } from 'express';
import { registerTipoProfissionalController } from '../controller/registerTipoProfissionalController';



const tipoProfissionalRouter = Router();

tipoProfissionalRouter.post('/register/tipo-profissional', registerTipoProfissionalController);


export {tipoProfissionalRouter}