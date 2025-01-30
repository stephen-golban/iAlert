export interface QueryConfig<T = unknown> {
  staleTime?: number;
  gcTime?: number;
  retry?: boolean | number;
  enabled?: boolean;
  noPersist?: boolean;
}

export interface QueuedMutation<T = unknown> {
  id: string;
  mutationKey: unknown[];
  variables: T;
  timestamp: number;
}
