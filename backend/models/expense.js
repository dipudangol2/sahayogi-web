import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
  {
    description: { type: String, required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true }, // e.g., 'Rent', 'Utilities', 'Supplies'
    date: { type: Date, default: Date.now }, // Date of the expense
    detailedDescription: { type: String }, // Additional details about the expense
  },
  { timestamps: true }
);

export const Expense = mongoose.model("expense", expenseSchema);
