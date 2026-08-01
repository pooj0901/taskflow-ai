import mongoose, { Schema, Document } from 'mongoose';

export interface IWaitlistItem {
  id?: string;
  name: string;
  email: string;
  company: string;
  createdAt: Date;
}

export interface IWaitlistDocument extends Document {
  name: string;
  email: string;
  company: string;
  createdAt: Date;
}

const WaitlistSchema: Schema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  company: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now }
});

export const WaitlistModel = mongoose.model<IWaitlistDocument>('Waitlist', WaitlistSchema);
