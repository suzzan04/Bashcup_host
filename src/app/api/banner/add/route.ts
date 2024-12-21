import { Banner } from "@/@types/Banner";
import { dbConnect } from "@/db/dbConnect";
import { ApiError } from "@/helpers/ApIError";
import { ApiResponse } from "@/helpers/ApiResponse";
import BannerModel from "@/models/Banner.model";

export async function POST(req: Request) {
  await dbConnect();
  try {
    const { name, image, forMainPage }: Banner = await req.json();
    const banner = new BannerModel({
      name,
      image,
      forMainPage,
    });
    await banner.save();
    return Response.json(
      new ApiResponse(201, banner, "New banner added succesfully", true)
    );
  } catch (error) {
    return Response.json(
      new ApiError(
        500,
        "Error adding new banner detail.",
        null,
        error as string[],
        undefined,
        false
      )
    );
  }
}
