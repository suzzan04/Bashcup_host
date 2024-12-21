import { dbConnect } from "@/db/dbConnect";
import { ApiError } from "@/helpers/ApIError";
import { ApiResponse } from "@/helpers/ApiResponse";
import FeedbackModel from "@/models/Feedback.model";

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  try {
    const feedback = await FeedbackModel.findByIdAndDelete(params.id);
    if (!feedback) {
      throw new ApiError(
        404,
        "Unable to delete. Feedback not found.",
        null,
        undefined,
        undefined,
        false
      );
    }
    return Response.json(
      new ApiResponse(
        200,
        feedback,
        "Feedback detail succesfully removed.",
        true
      )
    );
  } catch (error) {
    return Response.json(
      new ApiResponse(
        500,
        error as string,
        "Error removing feedback detail.",
        false
      )
    );
  }
}
