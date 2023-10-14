import express from 'express';
import { fetchAbout, fetchBadges, fetchLanguages, fetchTechStacks } from '../controllers/info';
import { fetchDuolingoInfo } from '../controllers/duolingo';

const infoRouter = express.Router();

infoRouter.get('/about', fetchAbout);
infoRouter.get('/badges', fetchBadges);
infoRouter.get('/languages', fetchLanguages);
infoRouter.get('/tech-stacks', fetchTechStacks);
infoRouter.get('/duolingo', fetchDuolingoInfo);

export default infoRouter;
