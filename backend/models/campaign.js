import mongoose from "mongoose";

const CampaignSchema = new mongoose.Schema({
  title: { type: String, required: true },
  cause: { type: String, required: true },
  imageUrl: { type: String, required: true },
  goal: { type: Number, required: true },
  raised: { type: Number, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  donors: { type: String, required: true },
});

export const Campaign = mongoose.model("campaigns", CampaignSchema);
