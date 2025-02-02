import React from "react";

import { usePhoneAuthForm } from "./hook";
import { Controller } from "react-hook-form";

import { View } from "react-native";
import { Text } from "~/components/ui";
import SubmitButton from "../submit-button";
import { PhoneInput } from "~/components/common";

import { type PhoneAuthFormData } from "./schema";
import { cn } from "~/lib/utils";

interface IPhoneAuthForm {
  buttonText?: string;
  questionText?: string;
  hideQuestion?: boolean;
  pushButtonDown?: boolean;
  onPressQuestion?(): void;
  onSubmit: (args: PhoneAuthFormData) => void;
}

const PhoneAuthForm: React.FC<IPhoneAuthForm> = ({
  onSubmit,
  questionText,
  pushButtonDown,
  onPressQuestion,
  hideQuestion = false,
  buttonText = "Continue",
}) => {
  const { control, errors, isSubmitting, handleSubmit, isValid } =
    usePhoneAuthForm();

  return (
    <>
      <View className={cn(pushButtonDown && "flex-1")}>
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

        {!hideQuestion && (
          <Text className="text-white text-base mt-4" onPress={onPressQuestion}>
            {questionText}
          </Text>
        )}
      </View>

      <SubmitButton
        title={buttonText}
        isDisabled={!isValid}
        isSubmitting={isSubmitting}
        onPress={handleSubmit((d) =>
          onSubmit({ phone: d.phone.replaceAll(" ", "") })
        )}
      />
    </>
  );
};
export { PhoneAuthForm };
