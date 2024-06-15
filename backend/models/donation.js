import mongoose from "mongoose";
const donationSchema = new mongoose.Schema(
  {
    donor: { type: String, required: true },
    amount: { type: Number, required: true },
  },
  { timestamps: true }
);

export const Donation = mongoose.model("donation", donationSchema);
