import { useEffect } from "react";
import * as Network from "expo-network";
import { onlineManager } from "@tanstack/react-query";

export function useOnlineStatus() {
  useEffect(() => {
    onlineManager.setEventListener((setOnline) => {
      const subscription = Network.addNetworkStateListener((state) => {
        setOnline(!!state.isConnected);
      });

      return () => subscription.remove();
    });
  }, []);
}
