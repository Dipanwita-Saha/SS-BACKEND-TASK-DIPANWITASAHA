import * as mongoose from 'mongoose';

export const tvshowschema = new mongoose.Schema({
  title: { type: String, required: true },
  actors: [{ type: String }],
  crewmembers: [
    {
    name: { type: String },
    position: { type: String }
    },
  ],
  runtime: { type: Number, required: true  },
  genres: { type: String , required: true }
});