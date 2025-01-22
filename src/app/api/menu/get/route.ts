import { dbConnect } from "@/db/dbConnect";
import { ApiError } from "@/helpers/ApIError";
import { ApiResponse } from "@/helpers/ApiResponse";
import MenuItemModel from "@/models/MenuItem.model";

export async function GET() {
  await dbConnect();
  try {
    const data = await MenuItemModel.find();
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
      new ApiResponse(201, data, " items fetched succesfully", true)
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
