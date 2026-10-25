import express from 'express';
import healthRouter from './routes/health.routes.js';
import jobsRouter from './routes/jobs.route.js';

const app = express();

app.use(express.json());

app.use('/api/health', healthRouter);
app.use('/api/jobs', jobsRouter)

export default app;