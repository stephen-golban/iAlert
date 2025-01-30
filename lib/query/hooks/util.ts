import { storage } from "~/lib/storage";
import { queryClient } from "../index";
import type { QueuedMutation } from "./type";

const MUTATION_QUEUE_KEY = "MUTATION_QUEUE";

export async function queueMutation<T>(
  mutation: Omit<QueuedMutation<T>, "id" | "timestamp">
) {
  try {
    const queue = await getMutationQueue();
    const newMutation: QueuedMutation<T> = {
      ...mutation,
      id: Math.random().toString(36).substring(7),
      timestamp: Date.now(),
    };

    await storage.setItem(MUTATION_QUEUE_KEY, [...queue, newMutation]);
  } catch (error) {
    console.error("Failed to queue mutation:", error);
    // Optionally rethrow or handle the error based on your needs
  }
}

async function getMutationQueue(): Promise<QueuedMutation[]> {
  try {
    const queue = await storage.getItem<QueuedMutation[]>(MUTATION_QUEUE_KEY);
    return queue ?? [];
  } catch (error) {
    console.error("Failed to get mutation queue:", error);
    return [];
  }
}

export async function processMutationQueue() {
  try {
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

    await storage.setItem(MUTATION_QUEUE_KEY, []);
  } catch (error) {
    console.error("Failed to process mutation queue:", error);
  }
}
