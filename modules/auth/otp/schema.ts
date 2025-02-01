import { z } from "zod";

export const otpSchema = z.object({
  otp: z.string().length(6, "Please enter a valid 6-digit code"),
});

export type OtpFormData = z.infer<typeof otpSchema>;
