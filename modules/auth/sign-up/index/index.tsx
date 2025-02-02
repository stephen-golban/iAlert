import React from "react";

import useSignUp from "./hook";

import { View } from "react-native";
import { KeyboardAware } from "~/components/common";
import { AuthForm, LayoutWrapper } from "../../components";

import { CONTENT } from "./mock";
import { useRouter } from "expo-router";

export function SignUpIndexScreen() {
  const router = useRouter();
  const { onSubmit } = useSignUp();

  const onPressQuestion = () => router.navigate("/(auth)/sign-in");

  return (
    <LayoutWrapper>
      <KeyboardAware>
        <View className="flex-1 bg-transparent">
          <AuthForm.TopText title={CONTENT.title} subtitle={CONTENT.subtitle} />

          <AuthForm.Phone
            pushButtonDown
            onSubmit={onSubmit}
            questionText={CONTENT.question}
            buttonText={CONTENT.button_text}
            onPressQuestion={onPressQuestion}
          />
        </View>
      </KeyboardAware>
    </LayoutWrapper>
  );
}
