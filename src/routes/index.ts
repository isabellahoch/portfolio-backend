import express from 'express';
import userRouter from './users';
import chatbotRouter from './chatbot';
import projectsRouter from './projects';
import infoRouter from './info';
import { helloWorld } from '../controllers';

const router = express.Router();

router.use('/users', userRouter);
router.use('/chatbot', chatbotRouter);
router.use('/projects', projectsRouter);
router.use('/info', infoRouter);
router.get('/', helloWorld);

export default router;