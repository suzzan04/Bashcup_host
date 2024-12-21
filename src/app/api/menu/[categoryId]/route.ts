import { dbConnect } from "@/db/dbConnect";
import { ApiError } from "@/helpers/ApIError";
import { ApiResponse } from "@/helpers/ApiResponse";
import MenuItemModel from "@/models/MenuItem.model";

export async function GET(
  _: Request,
  { params }: { params: { categoryId: string } }
) {
  await dbConnect();
  try {
    const items = await MenuItemModel.findById(params.categoryId);
    return Response.json(
      new ApiResponse(
        200,
        items ? items : [null],
        "Items detail based on category was fetched successfully.",
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
