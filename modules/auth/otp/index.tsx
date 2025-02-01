import React from "react";

import { useOtpForm } from "./hook";
import { Controller } from "react-hook-form";

import { View } from "react-native";
import OtpResend from "./otp-resend";
import { Text } from "~/components/ui";
import { LayoutWrapper } from "../components";
import { CustomOtpInput } from "~/components/common";

export function OtpScreen() {
  const { control, errors, isSubmitting, handleSubmit } = useOtpForm();

  return (
    <LayoutWrapper loading={isSubmitting}>
      <Text className="text-4xl font-bold text-white mb-4">
        We've sent a {"\n"}verification code.
      </Text>

      <Text className="text-lg text-white/80 mb-8">
        We've sent a verification code to your phone number +373 XXX XXX XXX
      </Text>

      <Text className="text-3xl font-bold text-white mt-4">6-digit code</Text>

      <View className="flex-1 mt-4">
        <Controller
          control={control}
          name="otp"
          render={({ field: { onChange, value, ref, ...rest } }) => (
            <CustomOtpInput
              error={errors.otp}
              onFilled={handleSubmit}
              onTextChange={onChange}
              {...rest}
            />
          )}
        />
        <OtpResend />
      </View>
    </LayoutWrapper>
  );
}
