import * as express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import {
	ClientToServerEvents,
	ServerToClientEvents,
	SocketData,
} from "./types";
import { db } from "./db";
import * as path from "path";

const app = express();
const httpServer = createServer(app);
const io = new Server<
	ClientToServerEvents,
	ServerToClientEvents,
	any,
	SocketData
>(httpServer, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"],
	},
});

io.on("connection", async (socket) => {
	// get the first 5 messages as a demo
	const messages = await db.message.findMany({
		take: 5,
		orderBy: {
			createdAt: "asc",
		},
		include: {
			author: true,
		},
	});
	socket.emit("init", messages);
});

app.use(express.static(path.join(__dirname, "../../client/dist")));

const PORT = process.env.PORT || 3000;

httpServer.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
