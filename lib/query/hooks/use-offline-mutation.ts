import { queueMutation } from "./util";
import { useMutation } from "@tanstack/react-query";

export function useOfflineMutation<TData, TVariables>(
  mutationKey: unknown[],
  mutationFn: (variables: TVariables) => Promise<TData>,
  options: {
    onSuccess?: (data: TData) => void;
    onError?: (error: Error) => void;
    retryOnReconnect?: boolean;
  } = {}
) {
  const mutation = useMutation({
    mutationFn: async (variables: TVariables) => {
      try {
        return await mutationFn(variables);
      } catch (error) {
        if (!navigator.onLine) {
          await queueMutation({ mutationKey, variables });
          return Promise.reject(new Error("Queued for offline"));
        }
        throw error;
      }
    },
    ...options,
  });

  return mutation;
}
