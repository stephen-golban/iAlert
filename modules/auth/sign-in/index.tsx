import React from "react";

import { View } from "react-native";
import { KeyboardAware, AnimatedFormWrapper } from "~/components/common";
import { AuthForm, LayoutWrapper, AuthOptionButtons } from "../components";

import { useSignIn } from "./hook";

export function SignInScreen() {
  const { isPhoneAuth, toggle, onSubmit, goToForgotPassword, content } =
    useSignIn();

  return (
    <LayoutWrapper>
      <KeyboardAware>
        <View className="flex-1 bg-transparent">
          <AuthForm.TopText title={content.title} subtitle={content.subtitle} />

          <AnimatedFormWrapper animationKey={isPhoneAuth ? "phone" : "email"}>
            {isPhoneAuth ? (
              <AuthForm.Phone
                onSubmit={onSubmit}
                questionText={content.question}
                onPressQuestion={goToForgotPassword}
              />
            ) : (
              <AuthForm.Email
                onSubmit={onSubmit}
                questionText={content.question}
                onPressQuestion={goToForgotPassword}
              />
            )}
          </AnimatedFormWrapper>
          <AuthOptionButtons toggleAuth={toggle} isPhoneAuth={isPhoneAuth} />
        </View>
      </KeyboardAware>
    </LayoutWrapper>
  );
}
