import mongoose from "mongoose";

const counterSchema = new mongoose.Schema({
  count: {
    type: Number,
    required: true,
  },
  mala: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Counter = mongoose.model("Counter", counterSchema);

export default Counter;
