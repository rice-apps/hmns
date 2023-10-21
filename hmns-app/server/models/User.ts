import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string;
}

const UserSchema = new Schema({
  name: { type: String, required: true },
});

export const User = mongoose.model<IUser>('User', UserSchema);
