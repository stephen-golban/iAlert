import React from "react";

import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

export function SplashScreen() {
  return (
    <View
      style={StyleSheet.absoluteFillObject}
      className="flex-1 items-center justify-center bg-black"
    >
      <Animated.View entering={FadeIn.duration(1000).delay(200)}>
        <Image
          className="w-full h-full"
          source={require("~/assets/images/splash-icon.png")}
        />
      </Animated.View>
    </View>
  );
}
