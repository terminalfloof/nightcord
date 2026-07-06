import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server'
import { AppRouter } from "../../../server/src/server";

export type RouterInput = inferRouterInputs<AppRouter>
export type RouterOutput = inferRouterOutputs<AppRouter>

export type User = RouterOutput['user']['get'];
export type Message = RouterOutput['message']['getFromId'];