import React from "react";

import { useToggle } from "usehooks-ts";
import { useRouter } from "expo-router";

import {
  AuthForm,
  EmailAuthForm,
  LayoutWrapper,
  PhoneAuthForm,
} from "../components";
import { View } from "react-native";
import { KeyboardAware } from "~/components/common";

import { getForgotPasswordContent } from "./mock";

export function ForgotPasswordScreen() {
  const navigation = useRouter();
  const [isEmail, toggle] = useToggle(true);

  const onSubmit = async (data: any) => {
    try {
      // TODO: Implement sign in logic
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call delay
      navigation.replace("/(auth)/otp");
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  const content = getForgotPasswordContent(!isEmail);

  return (
    <LayoutWrapper>
      <KeyboardAware>
        <View className="flex-1 bg-transparent">
          <AuthForm.TopText title={content.title} subtitle={content.subtitle} />

          {isEmail ? (
            <EmailAuthForm
              isEmailOnly
              onSubmit={onSubmit}
              questionText={content.question}
              onPressQuestion={toggle}
            />
          ) : (
            <PhoneAuthForm
              onSubmit={onSubmit}
              onPressQuestion={toggle}
              questionText={content.question}
            />
          )}
        </View>
      </KeyboardAware>
    </LayoutWrapper>
  );
}
