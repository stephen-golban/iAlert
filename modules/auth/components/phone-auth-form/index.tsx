import React from "react";

import { usePhoneAuthForm } from "./hook";
import { Controller } from "react-hook-form";

import { View } from "react-native";
import { Text } from "~/components/ui";
import { AuthForm } from "../auth-form";
import { PhoneInput } from "~/components/common";

import { type PhoneAuthFormData } from "./schema";

interface IPhoneAuthForm {
  buttonText?: string;
  questionText?: string;
  hideQuestion?: boolean;
  onPressQuestion?(): void;
  onSubmit: (args: PhoneAuthFormData) => void;
}

const PhoneAuthForm: React.FC<IPhoneAuthForm> = ({
  onSubmit,
  questionText,
  onPressQuestion,
  hideQuestion = false,
  buttonText = "Continue",
}) => {
  const { control, errors, isSubmitting, handleSubmit, isValid } =
    usePhoneAuthForm();

  return (
    <>
      <View className="mb-4">
        <Controller
          control={control}
          name="phone"
          render={({ field: { onChange, ref, ...rest } }) => (
            <PhoneInput
              {...rest}
              autoFocus
              onChange={onChange}
              error={errors.phone?.message}
            />
          )}
        />
      </View>

      {!hideQuestion && (
        <Text className="text-white text-base" onPress={onPressQuestion}>
          {questionText}
        </Text>
      )}

      <AuthForm.SubmitButton
        title={buttonText}
        isDisabled={!isValid}
        isSubmitting={isSubmitting}
        onPress={handleSubmit(onSubmit)}
      />
    </>
  );
};
export { PhoneAuthForm };
