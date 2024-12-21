import { dbConnect } from "@/db/dbConnect";
import { ApiError } from "@/helpers/ApIError";
import { ApiResponse } from "@/helpers/ApiResponse";
import CategoryModel from "@/models/Category.model";

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  try {
    const category = await CategoryModel.findByIdAndDelete(params.id);
    if (!category) {
      throw new ApiError(
        404,
        "Unable to delete. Category not found.",
        null,
        undefined,
        undefined,
        false
      );
    }
    return Response.json(
      new ApiResponse(
        200,
        category,
        "Categories detail succesfully removed.",
        true
      )
    );
  } catch (error) {
    return Response.json(
      new ApiResponse(
        500,
        error as string,
        "Error removing categories detail.",
        false
      )
    );
  }
}
