import React from "react";

import { useEmailAuthForm } from "./hook";

import { View } from "react-native";
import { Text } from "~/components/ui";
import SubmitButton from "../submit-button";
import { Controller } from "react-hook-form";
import { EmailInput, PasswordInput } from "~/components/common";

import { type EmailAuthFormData } from "./schema";

interface IEmailAuthForm {
  buttonText?: string;
  questionText?: string;
  isEmailOnly?: boolean;
  hideQuestion?: boolean;
  onPressQuestion?(): void;
  onSubmit: (args: EmailAuthFormData) => void;
}

const EmailAuthForm: React.FC<IEmailAuthForm> = ({
  onSubmit,
  isEmailOnly,
  questionText,
  onPressQuestion,
  hideQuestion = false,
  buttonText = "Continue",
}) => {
  const { control, errors, isValid, isSubmitting, handleSubmit } =
    useEmailAuthForm(isEmailOnly);

  return (
    <View className="gap-y-4">
      <View>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, ref, ...rest } }) => {
            return (
              <EmailInput
                {...rest}
                onChange={onChange}
                error={errors.email?.message}
              />
            );
          }}
        />
      </View>

      {!isEmailOnly && (
        <View>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, ref, ...rest } }) => (
              <PasswordInput
                {...rest}
                onChange={onChange}
                error={errors.password?.message}
              />
            )}
          />
        </View>
      )}

      {!hideQuestion && (
        <Text className="text-white text-base" onPress={onPressQuestion}>
          {questionText}
        </Text>
      )}

      <SubmitButton
        title={buttonText}
        isDisabled={!isValid}
        isSubmitting={isSubmitting}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};

export { EmailAuthForm };
