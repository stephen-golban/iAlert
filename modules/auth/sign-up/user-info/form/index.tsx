import React from "react";

import { useUserInfoForm } from "./hook";

import { Controller } from "react-hook-form";

import { View } from "react-native";
import { Input } from "~/components/ui";
import { AuthForm } from "~/modules/auth/components";
import { EmailInput, AvatarInput, DatePickerInput } from "~/components/common";

import { type UserInfoFormData } from "./schema";

interface IUserInfoForm {
  buttonText?: string;
  onSubmit: (args: UserInfoFormData) => void;
}

const UserInfoForm: React.FC<IUserInfoForm> = ({
  onSubmit,
  buttonText = "Continue",
}) => {
  const { control, formState, handleSubmit } = useUserInfoForm();
  const { errors, isValid, isSubmitting } = formState;

  return (
    <View className="gap-y-4">
      <View>
        <Controller
          control={control}
          name="avatar"
          render={({ field: { ref, ...rest } }) => (
            <AvatarInput {...rest} error={errors?.avatar?.message} />
          )}
        />
      </View>
      <View className="flex-row items-center gap-x-4">
        <View className="flex-1">
          <Controller
            control={control}
            name="firstName"
            render={({ field: { onChange, ...rest } }) => (
              <Input
                {...rest}
                autoFocus
                onChangeText={onChange}
                placeholder="First Name"
                error={errors?.firstName?.message}
              />
            )}
          />
        </View>
        <View className="flex-1">
          <Controller
            control={control}
            name="lastName"
            render={({ field: { onChange, ...rest } }) => (
              <Input
                {...rest}
                onChangeText={onChange}
                placeholder="Last Name"
                error={errors?.firstName?.message}
              />
            )}
          />
        </View>
      </View>

      <View>
        <Controller
          control={control}
          name="idnp"
          render={({ field: { onChange, ...rest } }) => (
            <Input
              {...rest}
              maxLength={13}
              keyboardType="numeric"
              onChangeText={(text) => {
                // Only allow numeric input
                const numericValue = text.replace(/[^0-9]/g, "");
                onChange(numericValue);
              }}
              error={errors?.idnp?.message}
              placeholder="Fiscal code (IDNP)"
            />
          )}
        />
      </View>

      <View>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, ref, ...rest } }) => {
            return (
              <EmailInput
                {...rest}
                autoFocus={false}
                onChange={onChange}
                error={errors.email?.message}
              />
            );
          }}
        />
      </View>

      <View>
        <Controller
          control={control}
          name="dob"
          render={({ field: { ref, ...rest } }) => (
            <DatePickerInput {...rest} error={errors?.dob?.message} />
          )}
        />
      </View>

      <AuthForm.SubmitButton
        title={buttonText}
        isDisabled={!isValid}
        isSubmitting={isSubmitting}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};

export default UserInfoForm;
