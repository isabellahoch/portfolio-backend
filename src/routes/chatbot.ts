import express from 'express';
import { textInput, voiceInput, chatbotHelloWorld } from '../controllers/chatbot';

const chatbotRouter = express.Router();

chatbotRouter.post('/text-input', textInput);
chatbotRouter.post('/voice-input', voiceInput);
chatbotRouter.get('/', chatbotHelloWorld);

export default chatbotRouter;
