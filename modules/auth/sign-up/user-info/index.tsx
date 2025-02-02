import React from "react";
import { View } from "react-native";

import UserInfoForm from "./form";
import { KeyboardAware } from "~/components/common";
import { AuthForm, LayoutWrapper } from "../../components";

export function UserInfoScreen() {
  return (
    <LayoutWrapper>
      <KeyboardAware>
        <View className="flex-1 bg-transparent">
          <AuthForm.TopText
            title="Personal Information"
            subtitle="Please provide your real personal details to maintain data accuracy and ensure proper service delivery"
          />

          <UserInfoForm onSubmit={console.log} />
        </View>
      </KeyboardAware>
    </LayoutWrapper>
  );
}
