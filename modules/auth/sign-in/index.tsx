import React from "react";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Container } from "~/components/common";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AuthHeader, PhoneAuthForm } from "../components";

export function SignInScreen() {
  const { bottom, top } = useSafeAreaInsets();
  return (
    <Container removeEdges={["top", "bottom"]}>
      <LinearGradient
        className="flex-1 h-full"
        colors={["#18246d", "black"]}
        style={StyleSheet.absoluteFillObject}
      />
      <View
        className="px-4 flex-1"
        style={{ paddingTop: top, paddingBottom: bottom }}
      >
        <AuthHeader />
        <PhoneAuthForm />
      </View>
    </Container>
  );
}
