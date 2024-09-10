import { Message, User } from "@prisma/client";
export * from "@prisma/client";

export interface ServerToClientEvents {
	init: (a: (Message & { author: User })[] | undefined) => void; // initialize messages
	updateUsers: (a: [string, User][]) => void; // update users
}

export interface ClientToServerEvents {
	user: (a: User) => void; // user update
}

export interface SocketData {}
