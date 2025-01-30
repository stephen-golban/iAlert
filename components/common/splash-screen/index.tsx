import React from "react";
import { View } from "react-native";
import { Text } from "~/components/ui";
import Animated, { FadeIn } from "react-native-reanimated";

export function SplashScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Animated.View entering={FadeIn.duration(1000).delay(200)}>
        <Text className="text-6xl font-bold text-white tracking-wider">
          iAlert
        </Text>
      </Animated.View>
    </View>
  );
}
