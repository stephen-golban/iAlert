import { View, Text, TextInput, useWindowDimensions } from "react-native";
import React from "react";
import { Icon } from "../icon";
import { LicensePlateProps } from "./types";
import { getPlateConfig } from "./utils";
import BlueSide from "./blue-side";

import { MaskedTextInput } from "react-native-mask-text";

const LicensePlate: React.FC<LicensePlateProps> = ({
  onChange,
  value = "",
  type = "standard",
}) => {
  const { width } = useWindowDimensions();
  console.log(width - 40);

  const config = getPlateConfig(type);
  return (
    <View className="flex flex-row items-center h-14 w-full max-w-[362px] rounded-lg bg-white overflow-hidden">
      {/* Left blue section with MD flag */}
      <BlueSide />
      {/* License plate number section */}

      <View className="flex-1 flex-row items-center justify-between px-4">
        {/* {getPlateConfig(type).prefix && (
          <Text className="text-2xl font-bold text-black mr-2">
            {getPlateConfig(type).prefix}
          </Text>
        )} */}
        {getPlateConfig(type).maxLength.map((length, index) => (
          <React.Fragment key={index}>
            {/* <TextInput
              style={{ width: length > 3 ? 80 : 60 }}
              maxLength={length}
              placeholderTextColor="#999"
              onChangeText={(text) => {
                const parts = value.split(" ");
                parts[index] = text.toUpperCase();
                onChange?.(parts.join(" ").trim());
              }}
              /> */}
            {/* {index < getPlateConfig(type).maxLength.length - 1 && (
              <View className="gap-y-1 items-center mx-2">
                <View className="w-2 h-2 rounded-full border-gray-400 border" />
                <View className="w-3 h-3 rounded-full border-gray-400 border" />
              </View>
            )} */}
          </React.Fragment>
        ))}
      </View>
    </View>
  );
};

export { LicensePlate };
