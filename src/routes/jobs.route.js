import Router from 'express';
import { getJobs } from '../controllers/jobs.controller.js';

const jobsRouter = Router();

jobsRouter.get('/', getJobs);

export default jobsRouter;