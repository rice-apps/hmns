import mongoose, { Document, Schema } from 'mongoose';

export interface IButterfly extends Document {
  name: string;
}

const ButterflySchema = new Schema({
  name: { type: String, required: true },
});

export const Butterfly = mongoose.model<IButterfly>('Butterfly', ButterflySchema);
