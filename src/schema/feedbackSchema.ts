import { z } from "zod";
export const feedbackSchema = z.object({
  fullname: z.string().min(2, "Name cannot be less than 2 characters."),
  email: z.string().email({ message: "Email is invalid" }),
  message: z.string().min(10, "Message must be at least 10 characters long"),
  rating: z.number(),
});
