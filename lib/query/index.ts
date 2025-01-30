import { QueryClient } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { PersistQueryClientOptions } from "@tanstack/react-query-persist-client";

// Create a client
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

// Create a persister
export const asyncStoragePersister = createAsyncStoragePersister({
  storage: AsyncStorage,
  key: "REACT_QUERY_OFFLINE_CACHE",
  throttleTime: 1000,
  serialize: JSON.stringify,
  deserialize: JSON.parse,
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
