import { queryClient } from "../index";
import AsyncStorage from "@react-native-async-storage/async-storage";

import type { QueuedMutation } from "./type";

const MUTATION_QUEUE_KEY = "MUTATION_QUEUE";

export async function queueMutation<T>(
  mutation: Omit<QueuedMutation<T>, "id" | "timestamp">
) {
  const queue = await getMutationQueue();
  const newMutation: QueuedMutation<T> = {
    ...mutation,
    id: Math.random().toString(36).substring(7),
    timestamp: Date.now(),
  };

  await AsyncStorage.setItem(
    MUTATION_QUEUE_KEY,
    JSON.stringify([...queue, newMutation])
  );
}

async function getMutationQueue(): Promise<QueuedMutation[]> {
  const queue = await AsyncStorage.getItem(MUTATION_QUEUE_KEY);
  return queue ? JSON.parse(queue) : [];
}

export async function processMutationQueue() {
  const queue = await getMutationQueue();
  if (!queue.length) return;

  for (const mutation of queue) {
    try {
      await queryClient
        .getMutationCache()
        .build(queryClient, {
          mutationKey: mutation.mutationKey,
          mutationFn: (variables: unknown) => Promise.resolve(variables),
        })
        .execute(mutation.variables);
    } catch (error) {
      console.error("Failed to process queued mutation:", error);
    }
  }

  await AsyncStorage.setItem(MUTATION_QUEUE_KEY, "[]");
}
