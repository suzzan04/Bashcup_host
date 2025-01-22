import { ApiResponse } from "@/helpers/ApiResponse";

export const getAllBanner = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URI}/api/banner/get`
  );
  const data = await response.json();
  return data as ApiResponse;
};
