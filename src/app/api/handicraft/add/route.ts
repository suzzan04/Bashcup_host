import { Item } from "@/@types/Item";
import { dbConnect } from "@/db/dbConnect";
import { ApiError } from "@/helpers/ApIError";
import { ApiResponse } from "@/helpers/ApiResponse";
import HandicraftModel from "@/models/Handicraft.model";

export async function POST(req: Request) {
  await dbConnect();
  try {
    const { name, category, description, image, price, isSpecial }: Item =
      await req.json();
    const handicraftItems = new HandicraftModel({
      name,
      category,
      image,
      description,
      isSpecial,
      price,
    });
    await handicraftItems.save();
    return Response.json(
      new ApiResponse(
        201,
        handicraftItems,
        "New handicraft item added succesfully",
        true
      )
    );
  } catch (error) {
    return Response.json(
      new ApiError(
        500,
        "Error adding new handicraft items detail.",
        null,
        error as string[],
        undefined,
        false
      )
    );
  }
}
