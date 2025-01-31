import { z } from "zod";

export const signInSchema = z.object({
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(
      /^(\d{2}\s\d{3}\s\d{3})$/,
      "Phone number must be in format: +373 XX XXX XXX"
    ),
});

export type SignInFormData = z.infer<typeof signInSchema>;
