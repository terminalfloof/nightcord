import * as express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import {
	ClientToServerEvents,
	ServerToClientEvents,
	SocketData,
	User,
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

const connectedUsers = new Map<string, User>();

io.on("connection", async (socket) => {
	const messages = await db.message.findMany({
		take: 50,
		orderBy: {
			createdAt: "asc",
		},
		include: {
			author: true,
		},
	});
	socket.emit("init", messages);
	connectedUsers.set(socket.id, {
		id: socket.id,
		username: "K",
		image: "",
	});
	io.emit("updateUsers", Array.from(connectedUsers.entries()));

	socket.on("user", async (user) => {
		// does user exist?
		// const existingUser = await db.user.findUnique({
		// 	where: {
		// 		id: user.id,
		// 	},
		// });

		// if (existingUser) {
		// 	// update user
		// 	await db.user.update({
		// 		where: {
		// 			id: user.id,
		// 		},
		// 		data: user,
		// 	});
		// } else {
		// 	// create user
		// 	await db.user.create({
		// 		data: user,
		// 	});
		// }

		connectedUsers.set(socket.id, user);
		io.emit("updateUsers", Array.from(connectedUsers.entries()));
		console.log(Array.from(connectedUsers.entries()));
	});

	socket.on("disconnect", () => {
		connectedUsers.delete(socket.id);
		io.emit("updateUsers", Array.from(connectedUsers.entries()));
	});
});

app.use(express.static(path.join(__dirname, "../../client/dist")));

const PORT = process.env.PORT || 3000;

httpServer.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
