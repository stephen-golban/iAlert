import "../global.css";

import { useEffect } from "react";
import { useAppInit } from "~/lib/hooks";
import { Stack } from "expo-router";
import { storage } from "~/lib/storage";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { Providers } from "~/components/common";
import { SplashScreen as CustomSplashScreen } from "~/components/common";

import "react-native-reanimated";

SplashScreen.preventAutoHideAsync().catch(() => {});

export default function RootLayout() {
  const { isReady, handleLayoutReady } = useAppInit({
    initializationTasks: [storage.init()],
  });

  if (!isReady) {
    return <CustomSplashScreen />;
  }

  return (
    <Providers onLayout={handleLayoutReady}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(main)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </Providers>
  );
}
