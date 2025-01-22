import { ApiResponse } from "@/helpers/ApiResponse";

export const getAllProducts = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URI}/api/menu/get`
  );
  const data = await response.json();
  return data as ApiResponse;
};
