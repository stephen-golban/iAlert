import { storage } from "~/lib/storage";
import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientOptions } from "@tanstack/react-query-persist-client";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";

// Create a client with error handling
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 3,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      networkMode: "online",
    },
    mutations: {
      networkMode: "online",
      retry: 3,
    },
  },
});

// Create a persister with custom storage wrapper
export const asyncStoragePersister = createAsyncStoragePersister({
  storage: {
    getItem: async (key) => {
      try {
        return await storage.getItem(key);
      } catch (error) {
        console.warn("Failed to get persisted query cache:", error);
        return null;
      }
    },
    setItem: async (key, value) => {
      try {
        await storage.setItem(key, value);
      } catch (error) {
        console.warn("Failed to persist query cache:", error);
      }
    },
    removeItem: async (key) => {
      try {
        await storage.removeItem(key);
      } catch (error) {
        console.warn("Failed to remove persisted query cache:", error);
      }
    },
  },
  key: "REACT_QUERY_OFFLINE_CACHE",
  throttleTime: 1000,
});

export const persistOptions: Omit<PersistQueryClientOptions, "queryClient"> = {
  persister: asyncStoragePersister,
  maxAge: 1000 * 60 * 60 * 24, // 24 hours
  buster: process.env.APP_VERSION || "1.0.0",
  dehydrateOptions: {
    shouldDehydrateQuery: (query) => {
      // Don't persist queries that have cacheTime 0 or are marked as non-persistent
      return (
        !(query.state.data as { noPersist?: boolean })?.noPersist &&
        query.options.gcTime !== 0
      );
    },
  },
};
