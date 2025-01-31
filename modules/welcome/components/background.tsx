import React from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import { StatusBar } from "expo-status-bar";
import { ImageBackground } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";

const gradient_colors = ["black", "transparent"];
const gradient_styles = { ...StyleSheet.absoluteFillObject, height: "70%" };

const backgrounds = [
  require("~/assets/welcome/porsche.jpg"),
  require("~/assets/welcome/notification.jpg"),
  require("~/assets/welcome/security.jpg"),
];

interface BackgroundProps extends React.PropsWithChildren {
  currentPage: number;
}

const Background = ({ children, currentPage }: BackgroundProps) => {
  const insets = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();

  return (
    <View className="flex-1">
      <StatusBar style="light" />
      <ImageBackground
        contentFit="cover"
        source={backgrounds[currentPage]}
        style={{
          width,
          height,
          paddingHorizontal: 16,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        }}
      >
        <LinearGradient
          style={gradient_styles as any}
          colors={gradient_colors as any}
        />
        {children}
      </ImageBackground>
    </View>
  );
};

export { Background };
