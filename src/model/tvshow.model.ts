import { Document } from 'mongoose';
export interface Show extends Document {
    title: string;
    actors: string[];
    crewmembers: { name: string; position: string }[];
    runtime: number;
    genre: string;
  }