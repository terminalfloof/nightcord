import { useEffect, useState } from "react";
import useSocketConnected from "./useSocket";
import { Message, User } from "@server/types";
import { socket } from "../providers/socket";

type ExtendedMessage = Message & { author: User };

export default function useMessages() {
	const isConnected = useSocketConnected();
	const [messages, setMessages] = useState<ExtendedMessage[] | undefined>();

	useEffect(() => {
		if (isConnected) {
			socket.on("init", (messages) => {
				setMessages(messages);
				console.log(messages);
			});
		} else {
			setMessages(undefined);
		}

		return () => {
			socket.off("init");
		};
	}, [isConnected]);

	return messages;
}
