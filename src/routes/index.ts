import express from 'express';
import userRouter from './users';
import chatbotRouter from './chatbot';
import { helloWorld } from '../controllers';

const router = express.Router();

router.use('/users', userRouter);
router.use('/chatbot', chatbotRouter);
router.get('/', helloWorld);

export default router;