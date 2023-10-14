import express from 'express';
import dotenv from 'dotenv';
import router from './routes/index';
import cors from 'cors';
import helmet from 'helmet';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

/**
 *  Firebase initialization
 */
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();

/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use('/api', router);

/**
 * Server Activation
 */
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
