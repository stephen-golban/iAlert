import React from "react";

import { useColorScheme } from "~/lib/hooks";
import { persistOptions, queryClient } from "~/lib/query";
import { useOnlineStatus, useAppState } from "~/lib/query/hooks";
import { initialWindowMetrics } from "react-native-safe-area-context";

import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { colorScheme } = useColorScheme();

  // Setup online status and app state management
  useOnlineStatus();
  useAppState();

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={persistOptions}
    >
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          {children}
        </ThemeProvider>
      </SafeAreaProvider>
    </PersistQueryClientProvider>
  );
};
