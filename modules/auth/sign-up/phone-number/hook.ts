import { useRouter } from "expo-router";

import type { PhoneAuthFormData } from "../../components/auth-form/phone-form/schema";
import type { EmailAuthFormData } from "../../components/auth-form/email-form/schema";

type SignInFormData = PhoneAuthFormData | EmailAuthFormData;

export default function useSignUp() {
  const router = useRouter();

  const onSubmit = async (data: SignInFormData) => {
    try {
      // TODO: Implement sign in logic
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(data);
      router.navigate({
        pathname: "/(auth)/sign-up/otp",
        params: { type: "phone", input: (data as PhoneAuthFormData).phone },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return {
    onSubmit,
  };
}
