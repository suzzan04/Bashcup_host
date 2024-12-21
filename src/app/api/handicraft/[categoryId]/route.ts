import { dbConnect } from "@/db/dbConnect";
import { ApiError } from "@/helpers/ApIError";
import { ApiResponse } from "@/helpers/ApiResponse";
import HandicraftModel from "@/models/Handicraft.model";

export async function GET() {
  await dbConnect();
  try {
    const items = await HandicraftModel.find();
    if (!items) throw new ApiError(404, "No handicraft items found.");
    return Response.json(
      new ApiResponse(
        200,
        items ? items : [null],
        "Items detail based was fetched successfully.",
        true
      )
    );
  } catch (error) {
    return Response.json(
      new ApiError(
        500,
        "Error getting items detail.",
        null,
        error as string[],
        undefined,
        false
      )
    );
  }
}
