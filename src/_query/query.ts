import { Query, QueryClient } from "@tanstack/react-query";

import { queryKeys, QueryKeys } from "./keys";

export const DAY_IN_MS = 1000 * 60 * 60 * 24 * 365;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      //how long we're persisting data for
      cacheTime: DAY_IN_MS,
    },
  },
});

const cachingQueries = (query: Query) => {
  const queryis = [queryKeys.AUTH];
  return !!query.queryKey.find((key: any) => queryis.includes(key));
};

export { cachingQueries, queryClient, queryKeys };
export type { QueryKeys };
