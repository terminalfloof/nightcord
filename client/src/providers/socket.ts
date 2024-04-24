import { Socket, io } from "socket.io-client";
import type { ServerToClientEvents, ClientToServerEvents } from "@server/types";

// "undefined" means the URL will be computed from the `window.location` object
const URL = (process.env.NODE_ENV = "production"
	? window.origin
	: "termp:3000");

export const socket: Socket<ServerToClientEvents, ClientToServerEvents> =
	io(URL);

socket.on("connect", () => {
	console.log("Connected to the server.");
});
