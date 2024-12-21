import { dbConnect } from "@/db/dbConnect";
import { ApiError } from "@/helpers/ApIError";
import { ApiResponse } from "@/helpers/ApiResponse";
import BannerModel from "@/models/Banner.model"; 

export async function GET() {
  await dbConnect();
  try {
    const banner = await BannerModel.find();
    if (!banner) throw new ApiError(404, "Banner not found");
    return Response.json(
      new ApiResponse(
        200,
        banner ? banner : [null],
        "Banner fetched successfully.",
        true
      )
    );
  } catch (error) {
    return Response.json(
      new ApiError(
        500,
        "Error getting banner detail.",
        null,
        error as string[],
        undefined,
        false
      )
    );
  }
}
