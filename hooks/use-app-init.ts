import { useEffect, useState } from "react";
import { useBoolean } from "usehooks-ts";
import * as SplashScreen from "expo-splash-screen";

interface UseAppInitOptions {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  dependencies?: any[];
  initializationTasks?: Promise<any>[];
}

export function useAppInit({
  onSuccess,
  onError,
  dependencies = [],
  initializationTasks = [],
}: UseAppInitOptions = {}) {
  const { value: isReady, setTrue: setIsReady } = useBoolean(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    async function initialize() {
      try {
        await Promise.all([...initializationTasks]);
        setIsReady();
        onSuccess?.();
      } catch (e) {
        const error =
          e instanceof Error ? e : new Error("Initialization failed");
        setError(error);
        onError?.(error);
      }
    }

    initialize();
  }, [...dependencies, setIsReady]);

  const handleLayoutReady = async () => {
    if (isReady) {
      try {
        await SplashScreen.hideAsync();
      } catch (e) {
        console.warn("Error hiding splash screen:", e);
      }
    }
  };

  return {
    isReady,
    error,
    handleLayoutReady,
  };
}
