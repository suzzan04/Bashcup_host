import { Feedback } from "@/@types/Feedback";
import { dbConnect } from "@/db/dbConnect";
import { ApiError } from "@/helpers/ApIError";
import { ApiResponse } from "@/helpers/ApiResponse";
import FeedbackModel from "@/models/Feedback.model";

export async function POST(req: Request) {
  await dbConnect();
  try {
    const { name, email, message, rating }: Feedback = await req.json();
    const feedback = new FeedbackModel({
      name,
      email,
      message,
      rating,
      show: false,
    });
    await feedback.save();
    return Response.json(
      new ApiResponse(201, feedback, "New feedback added succesfully", true)
    );
  } catch (error) {
    return Response.json(
      new ApiError(
        500,
        "Error adding new feedback detail.",
        null,
        error as string[],
        undefined,
        false
      )
    );
  }
}
