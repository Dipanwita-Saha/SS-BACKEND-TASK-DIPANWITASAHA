import { Document } from 'mongoose';
export interface User extends Document {
    name: string;
    password: number;
    post: string;
  }