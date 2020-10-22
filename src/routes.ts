import { Router } from 'express';

import MessageController from './controllers/MessageController';

const routes = Router();

routes.post('/texto', MessageController.convert);

export default routes;