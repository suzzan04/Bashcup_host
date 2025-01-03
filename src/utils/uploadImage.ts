import { ChangeEvent } from "react";
import { supabase } from ".";
import { ApiResponse } from "@/@types/ApiResponse";

export const uploadImage = async (
  event: ChangeEvent<HTMLInputElement>,
  path: string
) => {
  let resposeData: ApiResponse;
  const file = event.target.files?.[0];
  if (!file) {
    resposeData = {
      data: "No file provided",
      message: "No image file provided.",
      statusCode: 402,
      success: false,
    };
    return resposeData;
  }
  const { data, error } = await supabase.storage
    .from(path)
    .upload(`public/${file.name}`, file);

  if (error) {
    resposeData = {
      data: error.message,
      message: "Something went wrong uploading image.",
      statusCode: 400,
      success: false,
    };
    return resposeData;
  }

  resposeData = {
    message: "Image uploaded successfully.",
    data: data,
    statusCode: 201,
    success: true,
  };
  return resposeData;
};
