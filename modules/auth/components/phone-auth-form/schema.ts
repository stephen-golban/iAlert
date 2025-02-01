import { z } from "zod";

export const phoneAuthSchema = z.object({
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(
      /^(\d{3}\s\d{1,2}\s\d{3})$/,
      "Phone number must be in format: +373 XX XXX XXX"
    ),
});

export type PhoneAuthFormData = z.infer<typeof phoneAuthSchema>;
