import { useEffect, useState } from "react";
import useSocket from "./useSocket";
import { Message, User } from "@server/types";
import { socket } from "../providers/socket";

type EnrichedMessage = Message & { author: User };

export default function useMessages() {
	const isConnected = useSocket();
	const [messages, setMessages] = useState<EnrichedMessage[] | undefined>();

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
