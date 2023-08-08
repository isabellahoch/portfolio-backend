import express from 'express';
import dotenv from 'dotenv';
import router from './routes/index';
import cors from 'cors';
import helmet from 'helmet';

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
