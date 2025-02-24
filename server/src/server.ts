import * as express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import {
	ClientToServerEvents,
	ServerToClientEvents,
	SocketData,
	User,
} from './types';
import { db } from './db';
import * as path from 'path';

const app = express();
const httpServer = createServer(app);
const io = new Server<
	ClientToServerEvents,
	ServerToClientEvents,
	any,
	SocketData
>(httpServer, {
	cors: {
		origin: '*',
		methods: ['GET', 'POST'],
	},
});

const connectedUsers = new Map<string, User>();

io.on('connection', async (socket) => {
	// const messages = await db.message.findMany({
	// 	take: 50,
	// 	orderBy: {
	// 		createdAt: "asc",
	// 	},
	// 	include: {
	// 		author: true,
	// 	},
	// });
	socket.emit('init', []);
	connectedUsers.set(socket.id, {
		id: socket.id,
		username: 'K',
		image: '',
	});
	io.emit('updateUsers', Array.from(connectedUsers.entries()));

	socket.on('user', async (user) => {
		connectedUsers.set(socket.id, user);
		io.emit('updateUsers', Array.from(connectedUsers.entries()));
		console.log(Array.from(connectedUsers.entries()));
	});

	socket.on('disconnect', () => {
		connectedUsers.delete(socket.id);
		io.emit('updateUsers', Array.from(connectedUsers.entries()));
	});

	socket.on('message', (message) => {
		const user = connectedUsers.get(socket.id);
		if (!user) return;
		io.emit('pushMessage', {
			...user,
			content: message,
			createdAt: new Date(),
			id: 0,
			authorId: user.id,
			author: user,
		});
	});
});

app.use(express.static(path.join(__dirname, '../../client/dist')));

const PORT = process.env.PORT || 3000;

httpServer.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
