import { usePhoneAuthForm } from "./hook";

import { Link } from "expo-router";
import { View } from "react-native";
import { Controller } from "react-hook-form";
import { Button, Text } from "~/components/ui";
import {
  PhoneInput,
  KeyboardAware,
  LoadingSpinner,
  Icon,
} from "~/components/common";
import React from "react";

interface IPhoneAuthForm {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  questionText?: string;
  hideQuestion?: boolean;
  hideSocialAuth?: boolean;
}

const TITLE = "Welcome back";
const BUTTON_TEXT = "Continue";
const QUESTION = "Lost access to my phone number";
const SUBTITLE = "Enter the phone number associated with your iAlert account";

const PhoneAuthForm: React.FC<IPhoneAuthForm> = ({
  title = TITLE,
  subtitle = SUBTITLE,
  hideQuestion = false,
  hideSocialAuth = false,
  questionText = QUESTION,
  buttonText = BUTTON_TEXT,
}) => {
  const { control, errors, isSubmitting, onSubmit, isValid } =
    usePhoneAuthForm();

  return (
    <KeyboardAware>
      <View className="flex-1 mt-4">
        <Text className="text-white text-4xl font-bold mb-4">{title}</Text>
        <Text className="text-gray-400 text-base mb-8">{subtitle}</Text>

        <View className="mb-4">
          <Controller
            control={control}
            name="phone"
            render={({ field: { onChange, value } }) => (
              <PhoneInput
                autoFocus
                value={value}
                onChange={onChange}
                error={errors.phone?.message}
              />
            )}
          />
        </View>

        {!hideQuestion && (
          <Link href="/(auth)/forgot-password" className="mb-8">
            <Text className="text-white text-base">{questionText}</Text>
          </Link>
        )}

        <Button
          size="lg"
          onPress={onSubmit}
          disabled={isSubmitting || !isValid}
          className="rounded-full my-4 bg-white"
        >
          {isSubmitting ? (
            <LoadingSpinner />
          ) : (
            <Text className="text-center text-gray-900 font-medium">
              {isSubmitting ? <LoadingSpinner color="#000" /> : buttonText}
            </Text>
          )}
        </Button>

        {!hideSocialAuth && (
          <>
            <View className="items-center mb-8">
              <Text className="text-gray-400">or</Text>
            </View>

            <View className="gap-y-4">
              <Button
                size="lg"
                className="bg-button-dark rounded-full flex-row gap-x-2"
              >
                <Icon name="Google" size={14} />

                <Text className="text-white font-medium">
                  Continue with Google
                </Text>
              </Button>

              <Button
                size="lg"
                className="bg-button-dark rounded-full flex-row gap-x-2"
              >
                <Icon name="Apple" size={14} color="white" />
                <Text className="text-white font-medium">
                  Continue with Apple
                </Text>
              </Button>
            </View>
          </>
        )}
      </View>
    </KeyboardAware>
  );
};
export { PhoneAuthForm };
