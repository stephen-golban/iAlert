import { z } from "zod";

// Define password validation schema separately to avoid duplication
const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[0-9]/, "Password must contain at least one number")
  .regex(
    /[^A-Za-z0-9]/,
    "Password must contain at least one special character"
  );

export const emailAuthSchema = (isEmailOnly?: boolean) => {
  if (isEmailOnly) {
    return z.object({
      email: z
        .string()
        .min(1, "Email is required")
        .email("Invalid email format"),
    });
  }
  return z.object({
    email: z.string().min(1, "Email is required").email("Invalid email format"),
    password: passwordSchema,
  });
};

export type EmailAuthFormData = {
  email: string;
  password?: string | undefined;
};
