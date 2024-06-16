import mongoose from "mongoose";

const CampaignSchema = new mongoose.Schema({
  userName: { String },
  campaignName: { type: String, required: true },
  description: { type: String, required: true },
  goal: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  createdAt: {
    type: String,
    default: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
  },
  endsAt: {
    type: String,
    default: `${
      `${new Date().getDate()}`.split(" ")[2] + 7
    }/${new Date().getMonth()}/${new Date().getFullYear()}`,
  },
  fundCollected: { type: Number, default: 0 },
});
export const Campaign = mongoose.model("campaigns", CampaignSchema);
