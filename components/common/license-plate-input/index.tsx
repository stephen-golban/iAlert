import React from "react";

import { Input } from "~/components/ui";
import { LicensePlate } from "../license-plate";
import { View, Text } from "react-native";
import { cn } from "~/lib/utils";

interface ILicensePlateInput extends React.ComponentProps<typeof Input> {
  onChange: (...event: any[]) => void;
}

const LicensePlateInput: React.FC<ILicensePlateInput> = ({
  onChange,
  className,
  error,
  ...props
}) => {
  return (
    <View className={cn("w-full", className)}>
      <View
        className={cn(
          "border border-transparent rounded-2xl overflow-hidden",
          error && "border-destructive"
        )}
      >
        <LicensePlate onChange={onChange} value={props.value as string} />
      </View>
      {error && <Text className="text-destructive text-sm mt-2">{error}</Text>}
    </View>
  );
};

export { LicensePlateInput };
