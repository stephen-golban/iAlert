import "../global.css";

import { useAppInit } from "~/lib/hooks";
import { Stack } from "expo-router";
import { storage } from "~/lib/storage";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { Providers } from "~/components/common";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { SplashScreen as CustomSplashScreen } from "~/components/common";

import "react-native-reanimated";

SplashScreen.preventAutoHideAsync().catch(() => {});

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Roboto: Roboto_400Regular,
    Roboto_Bold: Roboto_700Bold,
  });
  const { isReady, handleLayoutReady } = useAppInit({
    dependencies: [fontsLoaded],
    initializationTasks: [storage.init()],
  });

  if (!isReady || !fontsLoaded) {
    return <CustomSplashScreen />;
  }

  return (
    <Providers onLayout={handleLayoutReady}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="welcome" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(main)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </Providers>
  );
}
