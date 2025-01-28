import { dbConnect } from "@/db/dbConnect";
import { ApiError } from "@/helpers/ApIError";
import { ApiResponse } from "@/helpers/ApiResponse";
import BannerModel from "@/models/Banner.model";

export async function DELETE(request: Request) {
  const { params } = await request.json();
  await dbConnect();
  try {
    const banner = await BannerModel.findByIdAndDelete(params.id);
    if (!banner) {
      throw new ApiError(
        404,
        "Unable to delete. Item not found.",
        null,
        undefined,
        undefined,
        false
      );
    }
    return Response.json(
      new ApiResponse(200, banner, "Banner detail succesfully removed.", true)
    );
  } catch (error) {
    return Response.json(
      new ApiResponse(
        500,
        error as string,
        "Error removing banner detail.",
        false
      )
    );
  }
}
