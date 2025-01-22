import { ApiResponse } from "@/helpers/ApiResponse";

export const getAllFeedback = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URI}/api/feedback/get`
  );
  const data = await response.json();
  return data as ApiResponse;
};
