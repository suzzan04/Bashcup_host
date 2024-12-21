import { dbConnect } from "@/db/dbConnect";
import { ApiError } from "@/helpers/ApIError";
import { ApiResponse } from "@/helpers/ApiResponse";
import CategoryModel from "@/models/Category.model";

export async function GET() {
  await dbConnect();
  try {
    const category = await CategoryModel.find();
    if (!category) throw new ApiError(404, "No categories found.");
    return Response.json(
      new ApiResponse(
        200,
        category ? category : [null],
        "Categories fetched successfully.",
        true
      )
    );
  } catch (error) {
    return Response.json(
      new ApiError(
        500,
        "Error getting categories detail.",
        null,
        error as string[],
        undefined,
        false
      )
    );
  }
}
