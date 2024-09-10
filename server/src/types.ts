import { Message, User } from "@prisma/client";
export * from "@prisma/client";

export interface ServerToClientEvents {
	init: (enrichedMessage: (Message & { author: User })[] | undefined) => void; // initialize messages
	updateUsers: (users: [string, User][]) => void; // update users
	pushMessage: (enrichedMessage: Message & { author: User }) => void; // push message
}

export interface ClientToServerEvents {
	message: (message: string) => void;
	user: (user: User) => void; // user update
}

export interface SocketData {}
