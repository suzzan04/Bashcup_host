import mongoose, { Schema } from "mongoose";
import { Feedback } from "@/@types/Feedback";

const FeedbackSchema = new Schema<Feedback>({
  name: {
    type: String,
    required: [true, "Full name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required."],
  },
  message: {
    type: String,
    required: [true, "Message is required"],
  },
  rating: {
    type: Number,
    required: [true, "Rating is required"],
  },
  show: {
    type: Boolean,
    default: false,
  },
});

const FeedbackModel =
  (mongoose.models.Feedback as mongoose.Model<Feedback>) ||
  mongoose.model<Feedback>("Feedback", FeedbackSchema);

export default FeedbackModel;
