import { dbConnect } from "@/db/dbConnect";
import { ApiError } from "@/helpers/ApIError";
import { ApiResponse } from "@/helpers/ApiResponse";
import MenuItemModel from "@/models/MenuItem.model";

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  try {
    const item = await MenuItemModel.findByIdAndDelete(params.id);
    if (!item) {
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
      new ApiResponse(200, item, "Item detail succesfully removed.", true)
    );
  } catch (error) {
    return Response.json(
      new ApiResponse(
        500,
        error as string,
        "Error removing items detail.",
        false
      )
    );
  }
}
