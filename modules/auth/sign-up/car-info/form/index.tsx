import React from "react";
import { View } from "react-native";
import { Controller } from "react-hook-form";
import { Input, Select, Text } from "~/components/ui";
import { AuthForm } from "~/modules/auth/components";
import { useCarInfoForm } from "./hook";
import { type CarInfoFormData } from "./schema";
import { LicensePlateInput } from "~/components/common/license-plate-input";

interface ICarInfoForm {
  buttonText?: string;
  onSubmit: (args: CarInfoFormData) => void;
}

type Option = {
  label: string;
  value: string;
};

const licensePlateTypes: Option[] = [
  { label: "Standard", value: "standard" },
  { label: "Diplomatic", value: "diplomatic" },
  { label: "Temporary", value: "temporary" },
  { label: "Special", value: "special" },
];

const CarInfoForm: React.FC<ICarInfoForm> = ({
  onSubmit,
  buttonText = "Continue",
}) => {
  const { control, formState, handleSubmit, watch } = useCarInfoForm();
  const { errors, isValid, isSubmitting } = formState;
  const selectedBrand = watch("brand");

  return (
    <View className="gap-y-4">
      {/* <View>
        <Controller
          control={control}
          name="carPlate"
          render={({ field: { ref, ...rest } }) => (
            <LicensePlateInput {...rest} error={errors?.carPlate?.message} />
          )}
        />
      </View> */}

      {/* <View>
        <Controller
          control={control}
          name="brand"
          render={({ field: { onChange, value, ...rest } }) => {
            const brand = carBrands.find((brand) => brand.value === value);
            return (
                <Select
                  {...rest}
                  items={carBrands}
                  value={brand}
                  placeholder="Select Car Brand"
                  onChange={onChange}
                  error={errors?.brand?.message}
                />
              )
          }}
        />
      </View>

      <View>
        <Controller
          control={control}
          name="model"
          render={({ field: { onChange, value, ...rest } }) => (
            <Select
              {...rest}
              items={selectedBrand ? carModels[selectedBrand] : []}
              value={value}
              placeholder="Select Car Model"
              onChange={onChange}
              error={errors?.model?.message}
              disabled={!selectedBrand}
            />
          )}
        />
      </View> */}

      <AuthForm.SubmitButton
        title={buttonText}
        isDisabled={!isValid}
        isSubmitting={isSubmitting}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};

export default CarInfoForm;
