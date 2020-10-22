import express, { response, request, Response, Request } from 'express';
import cors from 'cors';

import routes from './routes';

const app = express();

// Acesso a qualquer frontend (possível especificar)
app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(3333);