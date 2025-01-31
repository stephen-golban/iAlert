import React from "react";

import { View } from "react-native";
import { Text } from "~/components/ui";
import { Icon } from "~/components/common";

const WelcomeHeader = () => {
  return (
    <View className="flex flex-row items-center justify-between mt-2">
      <View className="flex flex-row items-center gap-x-3">
        <Icon name="Logo" color="white" />
        <Text className="text-white text-lg font-bold tracking-wider">
          Welcome to iAlert
        </Text>
      </View>
    </View>
  );
};

export { WelcomeHeader };
