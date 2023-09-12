import { Request, Response } from 'express';

import DialogflowService from '../services/dialogFlow';

const projectId: string = process.env.PROJECT_ID || '';
const credentialsPath: string = process.env.CREDENTIALS_PATH || '';

// Initialize DialogflowService with your config
const dialogflowService = new DialogflowService({
  projectId,
  credentialsPath,
});


export const textInput = async (req: Request, res: Response): Promise<void> => {
    const sessionId = dialogflowService.createUniqueSessionId(projectId);
    const userInput = req.body.message;
    
    try {
        const response = await dialogflowService.detectIntent(sessionId, userInput);
        if(response !== undefined && response !== null) {
            res.status(201).json({ response: response.fulfillmentText });
        }
    } catch (error) {
        console.error('Error communicating with Dialogflow:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const voiceInput = (req: Request, res: Response): void => {
    res.status(201).json({ data : "VOICE ENDPOINT CONNECTION SUCCESSFUL" });
};

export const chatbotHelloWorld = (req: Request, res: Response): void => {
    res.status(200).json({ data: "HELLO!!!!" });
};