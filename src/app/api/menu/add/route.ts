import { Item } from "@/@types/Item";
import { dbConnect } from "@/db/dbConnect";
import { ApiError } from "@/helpers/ApIError";
import { ApiResponse } from "@/helpers/ApiResponse";
import MenuItemModel from "@/models/MenuItem.model";

export async function POST(req: Request) {
  await dbConnect();
  try {
    const { name, category, description, image, price, isSpecial }: Item =
      await req.json();
    const newMenuItem = new MenuItemModel({
      name,
      category,
      image,
      description,
      isSpecial,
      price,
    });
    await newMenuItem.save();
    return Response.json(
      new ApiResponse(201, newMenuItem, "New item added succesfully", true)
    );
  } catch (error) {
    return Response.json(
      new ApiError(
        500,
        "Error adding new items detail.",
        null,
        error as string[],
        undefined,
        false
      )
    );
  }
}
