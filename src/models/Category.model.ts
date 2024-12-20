import mongoose, { Schema } from "mongoose";
import { Category } from "@/@types/Category";

const CategorySchema = new Schema<Category>({
  name: {
    type: String,
    required: [true, "Category name is required"],
    trim: true,
  },
  image: {
    type: String,
    required: [true, "Category image is required"],
  },
});

const CategoryModel =
  (mongoose.models.Category as mongoose.Model<Category>) ||
  mongoose.model<Category>("Category", CategorySchema);

export default CategoryModel;
