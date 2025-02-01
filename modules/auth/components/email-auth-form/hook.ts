import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { emailAuthSchema, type EmailAuthFormData } from "./schema";

const defaultValues = { email: "", password: "" };

export function useEmailAuthForm(isEmailOnly?: boolean) {
  const resolver = zodResolver(emailAuthSchema(isEmailOnly));

  const hook = useForm<EmailAuthFormData>({
    resolver,
    defaultValues,
    mode: "onChange",
  });

  const { formState, handleSubmit, control } = hook;

  return {
    control,
    handleSubmit,
    errors: formState.errors,
    isValid: formState.isValid,
    isSubmitting: formState.isSubmitting,
  };
}
