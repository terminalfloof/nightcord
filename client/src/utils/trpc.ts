import { QueryClient } from '@tanstack/react-query';
import { createTRPCClient, httpBatchLink, splitLink, wsLink, createWSClient } from '@trpc/client';
import { createTRPCOptionsProxy } from '@trpc/tanstack-react-query';
import type { AppRouter } from '../../../server/src/server';

export const queryClient = new QueryClient();

export const wsClient = createWSClient({
    url: 'ws://localhost:3000/trpc',
});

const trpcClient = createTRPCClient<AppRouter>({
    links: [splitLink({
        condition: (op) => op.type == 'subscription',
        true: wsLink<AppRouter>({ client: wsClient }),
        false: httpBatchLink({ url: 'http://localhost:3000/trpc' })
    })],
});

export const trpc = createTRPCOptionsProxy<AppRouter>({
    client: trpcClient,
    queryClient,
});