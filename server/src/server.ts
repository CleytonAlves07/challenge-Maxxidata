import { configDotenv } from 'dotenv';
import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { tipoProfissionalRouter } from './routers/tipoProfissionalRouter';
import { ProfissionalRouter } from './routers/ProfissionalRouter';


const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
}
app.use(express.json());
app.use(cors(corsOptions));
app.use(helmet());


configDotenv();

const PORT = process.env.PORT || 3001;

app.use('/', tipoProfissionalRouter);
app.use('/', ProfissionalRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  
})