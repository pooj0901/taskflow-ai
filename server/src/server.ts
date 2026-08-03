import dotenv from 'dotenv';
import app from './app';
import { connectDB } from './config/db';

dotenv.config();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("TaskFlow AI API is running 🚀");
});

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`[TaskFlow AI API] Server running on http://localhost:${PORT}`);
    console.log(`[API Routes] POST & GET available at http://localhost:${PORT}/api/waitlist`);
  });
};

startServer();