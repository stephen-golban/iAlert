import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";

import { useAppInit } from "@/hooks";
import { useFonts } from "expo-font";
import { useColorScheme } from "react-native";

import { Stack } from "expo-router";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ErrorBoundary } from "@/components";
import * as SplashScreen from "expo-splash-screen";
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from "react-native-safe-area-context";

import "react-native-reanimated";

const SpaceMono = require("../assets/fonts/SpaceMono-Regular.ttf");

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({ SpaceMono });

  const { isReady, handleLayoutReady } = useAppInit({
    dependencies: [fontsLoaded],
    initializationTasks: [fontsLoaded as unknown as Promise<any>],
    onError: (error) => {
      console.error("App initialization failed:", error);
    },
  });

  if (!isReady || !fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <ErrorBoundary>
        <View style={{ flex: 1 }} onLayout={handleLayoutReady}>
          <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
          >
            <Stack
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="(auth)" options={{ headerShown: false }} />
              <Stack.Screen name="(main)" options={{ headerShown: false }} />
              <Stack.Screen
                name="+not-found"
                options={{ headerShown: false }}
              />
            </Stack>
            <StatusBar style="auto" />
          </ThemeProvider>
        </View>
      </ErrorBoundary>
    </SafeAreaProvider>
  );
}
