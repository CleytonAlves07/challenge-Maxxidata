import { Router } from 'express';
import { createTipoProfissionalController, getAllTipoProfissionalController } from '../controller/tipoProfissionalController';



const tipoProfissionalRouter = Router();

tipoProfissionalRouter.post('/register/tipo-profissional', createTipoProfissionalController);
tipoProfissionalRouter.get('/tipos-profissionais', getAllTipoProfissionalController);



export {tipoProfissionalRouter}