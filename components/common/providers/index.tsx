import React from "react";

import { useColorScheme } from "~/lib/hooks";
import { persistOptions, queryClient } from "~/lib/query";
import { useOnlineStatus, useAppState } from "~/lib/query/hooks";
import { initialWindowMetrics } from "react-native-safe-area-context";

import { PortalHost } from "@rn-primitives/portal";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { KeyboardProvider } from "react-native-keyboard-controller";

interface ProvidersProps extends React.PropsWithChildren {
  onLayout: () => Promise<void>;
}

export function Providers({ children, onLayout }: ProvidersProps) {
  const { colorScheme } = useColorScheme();

  // Setup online status and app state management
  useOnlineStatus();
  useAppState();

  return (
    <>
      <KeyboardProvider>
        <PersistQueryClientProvider
          client={queryClient}
          persistOptions={persistOptions}
        >
          <SafeAreaProvider
            onLayout={onLayout}
            initialMetrics={initialWindowMetrics}
          >
            <ThemeProvider
              value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
            >
              <GestureHandlerRootView style={{ flex: 1 }}>
                <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
              </GestureHandlerRootView>
            </ThemeProvider>
          </SafeAreaProvider>
        </PersistQueryClientProvider>
      </KeyboardProvider>
      <PortalHost />
    </>
  );
}
