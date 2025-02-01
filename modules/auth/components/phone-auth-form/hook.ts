import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { phoneAuthSchema, type PhoneAuthFormData } from "./schema";

export function usePhoneAuthForm() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<PhoneAuthFormData>({
    resolver: zodResolver(phoneAuthSchema),
    defaultValues: { phone: "" },
    mode: "all",
  });

  return {
    control,
    errors,
    isValid,
    isSubmitting,
    handleSubmit,
  };
}
