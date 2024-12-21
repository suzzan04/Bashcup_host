import { Category } from "@/@types/Category";
import { dbConnect } from "@/db/dbConnect";
import { ApiError } from "@/helpers/ApIError";
import { ApiResponse } from "@/helpers/ApiResponse";
import CategoryModel from "@/models/Category.model";

export async function POST(req: Request) {
  await dbConnect();
  try {
    const { name, image }: Category = await req.json();
    const newCategory = new CategoryModel({
      name,
      image,
    });
    await newCategory.save();
    return Response.json(
      new ApiResponse(201, newCategory, "New category added succesfully", true)
    );
  } catch (error) {
    return Response.json(
      new ApiError(
        500,
        "Error adding new category detail.",
        null,
        error as string[],
        undefined,
        false
      )
    );
  }
}
