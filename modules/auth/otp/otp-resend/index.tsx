import React from "react";

import { useOtpResend } from "./hook";

import { View } from "react-native";
import { Button, Text } from "~/components/ui";
import { LoadingSpinner } from "~/components/common";

const OtpResend = () => {
  const { resending, resendStatus, resendCooldown, handleResend } =
    useOtpResend();
  return (
    <Button
      variant="ghost"
      onPress={handleResend}
      className="mt-4 active:bg-transparent"
      disabled={resending || resendCooldown > 0}
    >
      {resendStatus === "success" && resendCooldown > 0 ? (
        <Text className="text-white/70 font-medium text-center" disabled>
          Resend code in {resendCooldown}s
        </Text>
      ) : resendStatus === "error" ? (
        <Text
          className="text-red-500 group-active:text-red-500 font-medium text-center"
          disabled
        >
          Failed to resend code. Try again.
        </Text>
      ) : (
        <View className="flex-row items-center gap-x-4">
          <Text
            className="text-white group-active:text-white/80 font-bold text-center"
            disabled
          >
            I did not receive a code
          </Text>
          {resending && <LoadingSpinner color="#fff" />}
        </View>
      )}
    </Button>
  );
};

export default OtpResend;
