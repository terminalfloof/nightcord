import { Socket, io } from "socket.io-client";
import type { ServerToClientEvents, ClientToServerEvents } from "@server/types";

// "undefined" means the URL will be computed from the `window.location` object
const URL =
	import.meta.env.MODE === "development"
		? "10.98.176.60:3000"
		: window.origin;
console.log(URL);

export const socket: Socket<ServerToClientEvents, ClientToServerEvents> =
	io(URL);

socket.on("connect", () => {
	console.log("Connected to the server.");
});
