import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import CourseController from './app/controllers/CourseController';
import FileController from './app/controllers/FileController';
import CategoryController from './app/controllers/CategoryController';
import NameController from './app/controllers/NameController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/courses', CourseController.store);

routes.get('/courses', CourseController.index);
routes.get('/courses/category', CategoryController.index);
routes.get('/courses/name', NameController.index);
routes.delete('/courses/:id', CourseController.delete);

routes.put('/courses/:id', CourseController.update);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
