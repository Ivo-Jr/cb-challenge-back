import { Router } from 'express';

import CourseController from './app/controllers/CourseController';
import authMiddleware from './app/middleware/auth';

const routes = new Router();

routes.post('/courses', CourseController.store);

routes.use(authMiddleware);

routes.put('/courses', CourseController.update);

export default routes;
