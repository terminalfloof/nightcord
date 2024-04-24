import { Message, User } from "@prisma/client";
export * from "@prisma/client";

export interface ServerToClientEvents {
	init: (a: (Message & { author: User })[] | undefined) => void;
}

export interface ClientToServerEvents {}

export interface SocketData {}
