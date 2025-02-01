import React from "react";

import { OtpInput, type OtpInputProps } from "react-native-otp-entry";

import type { FieldError } from "react-hook-form";
import { Text } from "~/components/ui";

interface ICustomOtpInput
  extends Pick<OtpInputProps, "onTextChange" | "onBlur" | "onFocus"> {
  onFilled(): void;
  error?: FieldError;
}

const CustomOtpInput: React.FC<ICustomOtpInput> = ({
  error,
  onFilled,
  ...rest
}) => {
  return (
    <>
      <OtpInput
        autoFocus
        type="numeric"
        onFilled={() => onFilled()}
        focusColor={error ? "#ef4444" : "white"}
        theme={{
          containerStyle: { columnGap: 10 },
          pinCodeContainerStyle: {
            flex: 1,
            borderColor: error ? "#ef4444" : "white",
          },
          pinCodeTextStyle: { color: error ? "#ef4444" : "white" },
        }}
        numberOfDigits={6}
        textInputProps={{
          accessibilityLabel: "One-Time Password",
        }}
        {...rest}
      />
      {error && (
        <Text className="text-red-500 font-medium text-center mt-4">
          {error.message}
        </Text>
      )}
    </>
  );
};

export { CustomOtpInput };
