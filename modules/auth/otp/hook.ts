import { useForm } from "react-hook-form";
import { useRouter, useSegments } from "expo-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { type OtpFormData, otpSchema } from "./schema";
import { Keyboard } from "react-native";

const defaultValues = { otp: "" };

const resolver = zodResolver(otpSchema);

export function useOtpForm() {
  const router = useRouter();
  const segments = useSegments();
  const isSignUpFlow = segments.join().includes("sign-up");

  const hook = useForm<OtpFormData>({
    resolver,
    defaultValues,
    mode: "onChange",
  });
  const { setError, control, handleSubmit, formState } = hook;

  const onSubmit = async (dto: OtpFormData) => {
    try {
      Keyboard.dismiss();
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call delay

      // Simulate API error (70% chance of error)
      // if (Math.random() > 0.3) {
      //   throw new Error("Invalid verification code");
      // }

      if (isSignUpFlow) {
        return router.navigate("/(auth)/sign-up/user-info");
      }

      return;
    } catch (error) {
      // Set form error
      setError("otp", {
        type: "manual",
        message: error instanceof Error ? error.message : "Verification failed",
      });
    }
  };

  return {
    control,
    errors: formState.errors,
    isSubmitting: formState.isSubmitting,
    handleSubmit: handleSubmit(onSubmit),
  };
}
