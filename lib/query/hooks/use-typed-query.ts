import { useQuery } from "@tanstack/react-query";
import { useRefreshOnFocus } from "./use-refresh-on-focus";
import { QueryConfig } from "./type";

export function useTypedQuery<T>(
  queryKey: unknown[],
  queryFn: () => Promise<T>,
  config?: QueryConfig<T> & { refreshOnFocus?: boolean }
) {
  const query = useQuery({
    queryKey,
    queryFn,
    staleTime: config?.staleTime,
    gcTime: config?.gcTime,
    retry: config?.retry,
    enabled: config?.enabled,
    meta: { noPersist: config?.noPersist },
  });

  if (config?.refreshOnFocus) {
    useRefreshOnFocus(query.refetch);
  }

  return query;
}
