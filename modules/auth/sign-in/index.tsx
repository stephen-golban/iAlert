import React from "react";

import { useRouter } from "expo-router";
import { useToggle } from "usehooks-ts";

import {
  AuthForm,
  EmailAuthForm,
  LayoutWrapper,
  PhoneAuthForm,
  AuthOptionButtons,
} from "../components";
import { View } from "react-native";
import { KeyboardAware } from "~/components/common";

import { getSignInContent } from "./mock";

export function SignInScreen() {
  const [isPhoneAuth, toggle] = useToggle(true);

  const router = useRouter();
  const onSubmit = async (data: any) => {
    try {
      // TODO: Implement sign in logic
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call delay
      router.navigate("/(auth)/otp");
    } catch (error) {
      console.error(error);
    }
  };

  const content = getSignInContent(isPhoneAuth);

  const goToForgotPassword = () => {
    router.navigate("/(auth)/forgot-password");
  };

  return (
    <LayoutWrapper>
      <KeyboardAware>
        <View className="flex-1 bg-transparent">
          <AuthForm.TopText title={content.title} subtitle={content.subtitle} />

          {isPhoneAuth ? (
            <PhoneAuthForm
              onSubmit={onSubmit}
              questionText={content.question}
              onPressQuestion={goToForgotPassword}
            />
          ) : (
            <EmailAuthForm
              onSubmit={onSubmit}
              questionText={content.question}
              onPressQuestion={goToForgotPassword}
            />
          )}
          <AuthOptionButtons toggleAuth={toggle} isPhoneAuth={isPhoneAuth} />
        </View>
      </KeyboardAware>
    </LayoutWrapper>
  );
}
