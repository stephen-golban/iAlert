import { queryClient } from "../index";
import { useMutation } from "@tanstack/react-query";

export function useOptimisticMutation<TData, TVariables>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  {
    onMutate,
    onError,
    onSuccess,
    onSettled,
    ...options
  }: {
    onMutate?: (variables: TVariables) => Promise<unknown>;
    onError?: (error: Error, variables: TVariables, context: unknown) => void;
    onSuccess?: (data: TData, variables: TVariables, context: unknown) => void;
    onSettled?: (
      data: TData | undefined,
      error: Error | null,
      variables: TVariables,
      context: unknown
    ) => void;
  } = {}
) {
  return useMutation({
    mutationFn,
    onMutate: async (variables) => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries();

      // Save previous value if needed
      const previousValue = onMutate ? await onMutate(variables) : undefined;

      return previousValue;
    },
    onError: (error, variables, context) => {
      onError?.(error, variables, context);
    },
    onSuccess: (data, variables, context) => {
      onSuccess?.(data, variables, context);
    },
    onSettled: (data, error, variables, context) => {
      onSettled?.(data, error || null, variables, context);
    },
    ...options,
  });
}
