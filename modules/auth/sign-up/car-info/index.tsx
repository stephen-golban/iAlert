import React from "react";
import { View } from "react-native";

import UserInfoForm from "./form";
import { KeyboardAware } from "~/components/common";
import { AuthForm, LayoutWrapper } from "../../components";
import { useRouter } from "expo-router";

export function CarInfoScreen() {
  const router = useRouter();
  return (
    <LayoutWrapper>
      <KeyboardAware>
        <View className="flex-1 bg-transparent">
          <AuthForm.TopText
            title="Vehicle Information"
            subtitle="Please provide accurate details about your vehicle to help us better assist you in case of emergencies"
          />

          <UserInfoForm
            onSubmit={() => router.navigate("/(auth)/sign-up/car-info")}
          />
        </View>
      </KeyboardAware>
    </LayoutWrapper>
  );
}
