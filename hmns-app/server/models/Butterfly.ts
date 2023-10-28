import mongoose, { Document, Schema } from 'mongoose';

const ButterflySchema = new Schema({
  commonName: { type:String, required:true},
  scientificName: {type:String,required:true},
  photoUrl:{type:[String],required:true},
  location:{type:String,required:false},
  family:{type:[String],required:false},
  funFact:{type:String,required:false},
  priority:{type:String,required:false}
});

export const Butterfly = mongoose.model('Butterfly', ButterflySchema);