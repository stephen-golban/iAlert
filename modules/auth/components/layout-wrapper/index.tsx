import React from "react";

import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FullScreenLoader } from "~/components/common";

interface ILayoutWrapper extends React.PropsWithChildren {
  loading?: boolean;
}

const LayoutWrapper: React.FC<ILayoutWrapper> = ({ children, loading }) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <>
      <LinearGradient
        className="h-full"
        colors={["#18246d", "black"]}
        style={StyleSheet.absoluteFillObject}
      />
      <View className="flex-1 px-5 pt-4" style={{ paddingBottom: bottom }}>
        {children}
      </View>
      {loading && <FullScreenLoader />}
    </>
  );
};

LayoutWrapper.displayName = "LayoutWrapper";

export { LayoutWrapper };
