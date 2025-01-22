import { dbConnect } from "@/db/dbConnect";
import { ApiError } from "@/helpers/ApIError";
import { ApiResponse } from "@/helpers/ApiResponse";
import HandicraftModel from "@/models/Handicraft.model";

export async function GET() {
  await dbConnect();
  try {
    const data = await HandicraftModel.find();
    if (!data) {
      throw new ApiError(
        404,
        "NO products found.",
        null,
        undefined,
        undefined,
        false
      );
    }
    return Response.json(
      new ApiResponse(201, data, " item fetched succesfully", true)
    );
  } catch (error) {
    return Response.json(
      new ApiError(
        500,
        "Error getting  items detail.",
        null,
        error as string[],
        undefined,
        false
      )
    );
  }
}
