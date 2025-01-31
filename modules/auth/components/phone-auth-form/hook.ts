import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, type SignInFormData } from "./schema";

export function usePhoneAuthForm() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: { phone: "" },
    mode: "all",
  });

  const onSubmit = async (data: SignInFormData) => {
    try {
      // TODO: Implement sign in logic
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call delay
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    control,
    errors,
    isValid,
    isSubmitting,
    onSubmit: handleSubmit(onSubmit),
  };
}
