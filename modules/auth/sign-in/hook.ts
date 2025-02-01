import { useRouter } from "expo-router";
import { useToggle } from "usehooks-ts";

import type { PhoneAuthFormData } from "../components/auth-form/phone-form/schema";
import type { EmailAuthFormData } from "../components/auth-form/email-form/schema";

import { getSignInContent } from "./mock";

type SignInFormData = PhoneAuthFormData | EmailAuthFormData;

export const useSignIn = () => {
  const [isPhoneAuth, toggle] = useToggle(true);
  const router = useRouter();

  const onSubmit = async (data: SignInFormData) => {
    try {
      // TODO: Implement sign in logic
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(data);
      if (isPhoneAuth) {
        router.navigate({
          pathname: "/(auth)/otp",
          params: { type: "phone", input: (data as PhoneAuthFormData).phone },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const goToForgotPassword = () => {
    router.navigate("/(auth)/forgot-password");
  };

  const content = getSignInContent(isPhoneAuth);

  return {
    isPhoneAuth,
    toggle,
    onSubmit,
    goToForgotPassword,
    content,
  };
};
