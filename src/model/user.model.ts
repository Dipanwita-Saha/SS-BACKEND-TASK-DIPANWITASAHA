import { Document } from 'mongoose';
export interface Shows extends Document {
    name: string;
    password: number;
    post: string;
  }