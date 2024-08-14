import mongoose, { Document, Schema, model } from 'mongoose';

interface IToken extends Document {
  address: string;
  date: Date;
}

const TokenSchema: Schema = new Schema({
  address: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Token = model<IToken>('Token', TokenSchema);

export default Token;
