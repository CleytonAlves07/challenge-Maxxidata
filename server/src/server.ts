import { configDotenv } from 'dotenv';
import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc, { Options } from 'swagger-jsdoc';

import { tipoProfissionalRouter } from './routers/tipoProfissionalRouter';
import { profissionalRouter } from './routers/profissionalRouter';
import errorHandler from './middleware/ErrorHandler';

const app = express();


const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(express.json());
app.use(cors(corsOptions));
app.use(helmet());


configDotenv();

const swaggerOptions: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Profissionais e tipo de Profissionais',
      version: '1.0.0',
      description: 'API para gerenciamento de profissionais e tipos de profissionais',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/routers/*.ts'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/', tipoProfissionalRouter);
app.use('/', profissionalRouter);

app.use(errorHandler);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`Documentação disponível em http://localhost:${PORT}/api-docs`);
});
