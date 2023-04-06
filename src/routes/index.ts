import express from 'express';
import userRouter from './users';
import { helloWorld } from '../controllers';

const router = express.Router();

router.use('/users', userRouter);
router.get('/', helloWorld);

export default router;