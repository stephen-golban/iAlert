import "../global.css";

import { useFonts } from "expo-font";
import { useAppInit } from "~/lib/hooks";

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { ErrorBoundary, Providers } from "~/components/common";
import { SplashScreen as CustomSplashScreen } from "~/components/common";

import "react-native-reanimated";

const SpaceMono = require("../assets/fonts/SpaceMono-Regular.ttf");

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({ SpaceMono });

  const { isReady, handleLayoutReady } = useAppInit({
    dependencies: [fontsLoaded],
    initializationTasks: [fontsLoaded as unknown as Promise<any>],
    onError: (error) => {
      console.error("App initialization failed:", error);
    },
  });

  if (!isReady || !fontsLoaded) {
    return <CustomSplashScreen />;
  }

  return (
    <Providers>
      <ErrorBoundary onLayout={handleLayoutReady}>
        <Stack screenOptions={{ headerShown: true }}>
          <Stack.Screen name="index" options={{ headerShown: true }} />
          <Stack.Screen name="(auth)" options={{ headerShown: true }} />
          <Stack.Screen name="(main)" options={{ headerShown: true }} />

          <Stack.Screen name="+not-found" options={{ headerShown: true }} />
        </Stack>
        <StatusBar style="auto" />
      </ErrorBoundary>
    </Providers>
  );
}
