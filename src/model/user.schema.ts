import * as mongoose from 'mongoose';

export const Userschema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  post: { type: String}

});