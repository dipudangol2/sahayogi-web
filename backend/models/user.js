import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  contact: { type: Number, required: true },
  country: { type: String, required: true },
  zip: { type: Number, required: true },
  balance:{type:Number, default:0}
});
export const User = mongoose.model("users", UserSchema);
