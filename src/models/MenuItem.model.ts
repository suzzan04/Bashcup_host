import mongoose, { Schema } from "mongoose";
import { Item } from "@/@types/Item";

const MenuItemSchema = new Schema<Item>({
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
    default: false,
  },
});

const MenuItemModel =
  (mongoose.models.Menu as mongoose.Model<Item>) ||
  mongoose.model<Item>("Menu", MenuItemSchema);

export default MenuItemModel;
