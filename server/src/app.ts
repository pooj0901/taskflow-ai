import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import waitlistRoutes from './routes/waitlistRoutes';

const app: Express = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/waitlist', waitlistRoutes);

// Health check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', service: 'TaskFlow AI Backend API', timestamp: new Date().toISOString() });
});

export default app;
