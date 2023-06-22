import * as mongoose from 'mongoose';

export const tvshowschema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  post: { type: String}

});