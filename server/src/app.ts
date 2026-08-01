import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import waitlistRoutes from './routes/waitlistRoutes';

const app: Express = express();

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("TaskFlow AI API is running 🚀");
});

app.use('/api/waitlist', waitlistRoutes);

app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    service: 'TaskFlow AI Backend API',
    timestamp: new Date().toISOString()
  });
});
export default app;