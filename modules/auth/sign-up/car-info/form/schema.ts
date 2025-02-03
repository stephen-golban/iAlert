import { z } from "zod";

export const carInfoSchema = z.object({
  plateType: z.string({
    required_error: "Please select a license plate type",
  }),
  carPlate: z.string({
    required_error: "Please enter your car plate number",
  }),
  brand: z.string({
    required_error: "Please select your car brand",
  }),
  model: z.string({
    required_error: "Please select your car model",
  }),
});

export type CarInfoFormData = z.infer<typeof carInfoSchema>;
