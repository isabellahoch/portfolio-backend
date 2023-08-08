import * as dialogflow from '@google-cloud/dialogflow';
import * as path from 'path';
import {v4 as uuidv4} from 'uuid';

interface DialogflowServiceConfig {
  projectId: string;
  credentialsPath: string;
}

class DialogflowService {
  private sessionClient: dialogflow.SessionsClient;

  constructor(private config: DialogflowServiceConfig) {
    const { projectId, credentialsPath } = config;

    const credentials = path.join(__dirname, credentialsPath);

    // Authenticate with Google Cloud using the provided service account JSON file
    this.sessionClient = new dialogflow.SessionsClient({ projectId, keyFilename: credentials });
  }

  // Create a new unique session ID
  createUniqueSessionId(projectId: string) {
    return uuidv4();
  }

  // Create a new session
  async createSession(sessionId: string) {
    const sessionPath = this.sessionClient.projectAgentSessionPath(
      this.config.projectId,
      sessionId
    );

    return sessionPath;
  }

  // Send a request to Dialogflow
  async detectIntent(sessionId: string, query: string) {
    const sessionPath = await this.createSession(sessionId);

    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: query,
          languageCode: 'en-US',
        },
      },
    };

    const responses = await this.sessionClient.detectIntent(request);

    return responses[0].queryResult;
  }
}

export default DialogflowService;
