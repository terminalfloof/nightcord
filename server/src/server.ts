import { initTRPC } from "@trpc/server";
import { z } from "zod";
import * as trpcExpress from "@trpc/server/adapters/express";
import * as express from "express";
import * as cors from "cors";
import { db } from "./db";

import { applyWSSHandler } from '@trpc/server/adapters/ws';
import { WebSocketServer } from 'ws';

const createContext = ({ req, res }: trpcExpress.CreateExpressContextOptions) => ({});
type Context = Awaited<ReturnType<typeof createContext>>;
const t = initTRPC.context<Context>().create();

const userRouter = t.router({
	get: t.procedure.input(z.string()).query(async (opts) => {
		const result = await db.user.findUnique({
			where: {
				id: opts.input
			}
		});
		return result;
	}),
	getAll: t.procedure.query(async () => {
		const result = await db.user.findMany()
		return result;
	}),
})

const messageRouter = t.router({
	getFromId: t.procedure.input(z.number()).query(async (opts) => {
		console.log(opts.input);
		const result = await db.message.findUnique({
			where: { id: opts.input }
		})
		return result;
	}),
	getAll: t.procedure.query(async () => {
		const messages = await db.message.findMany();
		return messages;
	})
})

const appRouter = t.router({
	user: userRouter,
	message: messageRouter
})

export type AppRouter = typeof appRouter;

const app = express();

app.use(cors());

app.use('/trpc',
	trpcExpress.createExpressMiddleware({
		router: appRouter,
		createContext
	})
)

const server = app.listen(3000);
server.on("listening", () => console.log("listening on 3000"))

const wss = new WebSocketServer({
	server
})

const handler = applyWSSHandler({
	wss,
	router: appRouter,
	keepAlive: {
		enabled: true,
		pingMs: 30000,
		pongWaitMs: 5000
	}
})

wss.on('connection', (ws) => {
	console.log(`++ Connection (${wss.clients.size})`);
	ws.once('close', () => {
		console.log(`-- Connection (${wss.clients.size})`);
	});
});

process.on('SIGTERM', () => {
	console.log('SIGTERM');
	handler.broadcastReconnectNotification();
	wss.close();
});
