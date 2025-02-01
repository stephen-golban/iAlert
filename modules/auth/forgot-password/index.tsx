import React from "react";

import { LayoutWrapper, PhoneAuthForm } from "../components";
import { useRouter } from "expo-router";

export function ForgotPasswordScreen() {
  const navigation = useRouter();
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
  return (
    <LayoutWrapper>
      <PhoneAuthForm
        hideQuestion
        hideSocialAuth
        onSubmit={onSubmit}
        title="Enter phone number"
        subtitle="Make sure it's the number you use with the iAlert account you lost access to"
      />
    </LayoutWrapper>
  );
}
