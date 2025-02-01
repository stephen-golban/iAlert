import React from "react";

import { View, StyleSheet } from "react-native";
import { LoadingSpinner } from "../loading-spinner";
import { LinearGradient } from "expo-linear-gradient";

const FullScreenLoader = () => {
  return (
    <View
      style={StyleSheet.absoluteFillObject}
      className="flex-1 justify-center items-center z-50"
    >
      <LinearGradient
        className="h-full"
        colors={["#18246d", "black"]}
        style={StyleSheet.absoluteFillObject}
      />
      <LoadingSpinner color="white" className="-mt-20" />
    </View>
  );
};

export { FullScreenLoader };
