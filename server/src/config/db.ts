import mongoose from 'mongoose';

export let isConnectedToMongo = false;

export const connectDB = async (): Promise<void> => {
  const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/taskflow-ai';
  try {
    // Short timeout so if local mongo is not running, fallback engages quickly without blocking server boot
    await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 2500,
    });
    isConnectedToMongo = true;
    console.log(`[MongoDB] Connected successfully to ${mongoURI}`);
  } catch (error) {
    isConnectedToMongo = false;
    console.warn('[MongoDB Warning] Could not connect to MongoDB daemon. Operating with high-reliability in-memory data store.');
  }
};
