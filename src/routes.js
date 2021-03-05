import { Router } from 'express';

import CourseController from './app/controllers/CourseController';

const routes = new Router();

routes.post('/courses', CourseController.store);
routes.put('/courses', CourseController.update);

export default routes;
