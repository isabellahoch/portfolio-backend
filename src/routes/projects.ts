import express from 'express';
import { fetchProjects } from '../controllers/projects';

const projectsRouter = express.Router();

projectsRouter.get('/', fetchProjects);

export default projectsRouter;
