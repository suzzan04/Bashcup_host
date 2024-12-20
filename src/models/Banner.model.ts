import mongoose, { Schema } from "mongoose";
import { Banner } from "@/@types/Banner";

const BannerSchema = new Schema<Banner>({
  name: {
    type: String,
    required: [true, "Banner name is required"],
    trim: true,
  },
  image: {
    type: String,
    required: [true, "Banner image is required"],
  },
  forMainPage: {
    type: Boolean,
    required: [
      true,
      "Please specify if the banner is used for home page or not.",
    ],
  },
});

const BannerModel =
  (mongoose.models.Banner as mongoose.Model<Banner>) ||
  mongoose.model<Banner>("Banner", BannerSchema);

export default BannerModel;
