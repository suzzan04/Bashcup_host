import mongoose, { Schema } from "mongoose";
import { Item } from "@/@types/Item";

const HandicraftSchem = new Schema<Item>({
  name: {
    type: String,
    required: [true, "Item name is required"],
    trim: true,
  },
  image: {
    type: String,
    required: [true, "Item image is required"],
  },
  description: {
    type: String,
    required: [true, "Item description is required"],
  },
  price: {
    type: Number,
    required: [true, "Item price is required"],
  },
  category: {
    type: String,
    required: [true, "Item category is required"],
  },
  isSpecial: {
    type: Boolean,
    required: [true, "Please specify the type of the item."],
  },
});

const HandicraftModel =
  (mongoose.models.Handicraft as mongoose.Model<Item>) ||
  mongoose.model<Item>("Handicraft", HandicraftSchem);

export default HandicraftModel;
