import { dbConnect } from "@/db/dbConnect";
import { ApiError } from "@/helpers/ApIError";
import { ApiResponse } from "@/helpers/ApiResponse";
import FeedbackModel from "@/models/Feedback.model";

export async function GET() {
  await dbConnect();
  try {
    const feedback = await FeedbackModel.find();
    if (!feedback) throw new ApiError(404, "No feedbacks found.");
    return Response.json(
      new ApiResponse(
        200,
        feedback ? feedback : [null],
        "Customer feedback fetched successfully.",
        true
      )
    );
  } catch (error) {
    return Response.json(
      new ApiError(
        500,
        "Error getting feedback detail.",
        null,
        error as string[],
        undefined,
        false
      )
    );
  }
}
