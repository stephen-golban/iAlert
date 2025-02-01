import React from "react";

import { useToggle } from "usehooks-ts";
import { useRouter } from "expo-router";

import { View } from "react-native";
import { AuthForm, LayoutWrapper } from "../components";
import { KeyboardAware, AnimatedFormWrapper } from "~/components/common";

import { getForgotPasswordContent } from "./mock";

export function ForgotPasswordScreen() {
  const navigation = useRouter();
  const [isEmail, toggle] = useToggle(true);

  const onSubmit = async (data: any) => {
    try {
      // TODO: Implement sign in logic
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call delay
      navigation.navigate({
        pathname: "/(auth)/otp",
        params: {
          type: isEmail ? "email" : "phone",
          input: isEmail ? data.email : data.phone,
        },
      });
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

          <AnimatedFormWrapper animationKey={isEmail ? "email" : "phone"}>
            {isEmail ? (
              <AuthForm.Email
                isEmailOnly
                onSubmit={onSubmit}
                onPressQuestion={toggle}
                questionText={content.question}
              />
            ) : (
              <AuthForm.Phone
                onSubmit={onSubmit}
                onPressQuestion={toggle}
                questionText={content.question}
              />
            )}
          </AnimatedFormWrapper>
        </View>
      </KeyboardAware>
    </LayoutWrapper>
  );
}
