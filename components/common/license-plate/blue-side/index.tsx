import React from "react";
import { Icon } from "../../icon";
import { Text } from "~/components/ui";
import { View } from "react-native";

const BlueSide = () => {
  return (
    <View className="w-16 h-full bg-[#18246d] items-center justify-center">
      <Icon name="Moldova" size={24} />
      <Text className="text-white">MD</Text>
    </View>
  );
};

export default BlueSide;
