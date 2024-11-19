import { configDotenv } from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { tipoProfissionalRouter } from './routers/tipoProfissionalRouter';


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

// app.get('/', (req, res) => {
//   res.send('Hello, TypeScript + Express + Dotenv!');
// });

app.use('/', tipoProfissionalRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  
})