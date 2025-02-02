import { z } from "zod";

const IDNP_REGEX = /^((2\d{12})|(09\d{11}))$/;

const validateIDNPChecksum = (value: string): boolean => {
  const crc = value
    .substring(0, 12)
    .split("")
    .reduce(
      (acc, char, i) =>
        acc + Number(char) * (i % 3 === 0 ? 7 : i % 3 === 1 ? 3 : 1),
      0
    );

  return Number(value[12]) === crc % 10;
};

// Individual field schemas for better reusability
const emailSchema = z.string().email("Please enter a valid email");
const requiredStringSchema = z.string().min(1);
const idnpSchema = z
  .string()
  .length(13, "IDNP must be exactly 13 digits")
  .regex(/^\d+$/, "IDNP must contain only numbers")
  .refine((val) => IDNP_REGEX.test(val), "Invalid IDNP format")
  .refine(validateIDNPChecksum, "Invalid IDNP checksum");

const MIN_AGE = 16;
const dobSchema = z.date().refine((date) => {
  const today = new Date();
  const birthDate = new Date(date);
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    return age - 1 >= MIN_AGE;
  }

  return age >= MIN_AGE;
}, "You must be at least 16 years old");

export const userInfoSchema = z.object({
  email: emailSchema,
  firstName: requiredStringSchema.describe("First name is required"),
  lastName: requiredStringSchema.describe("Last name is required"),
  dob: dobSchema,
  idnp: requiredStringSchema,
  avatar: z.string().min(1),
});

export type UserInfoFormData = z.infer<typeof userInfoSchema>;
