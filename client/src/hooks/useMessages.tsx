import { useEffect, useState } from 'react';
import { trpc } from '../utils/trpc';
import { useQuery } from '@tanstack/react-query';

export default function useMessages() {
	const { data, error, isPending, isError } = useQuery(trpc.message.getAll.queryOptions());

	const [messages, setMessages] = useState<typeof data>();

	useEffect(() => {
		if (isPending) setMessages(undefined);
		if (isError) throw new Error(error.message);

		setMessages(data);
	}, [isPending, isError])

	// const isConnected = useSocket();
	// const [messages, setMessages] = useState<EnrichedMessage[] | undefined>();

	// useEffect(() => {
	// 	if (isConnected) {
	// 		socket.on('init', (messages: EnrichedMessage[] | undefined) => {
	// 			setMessages(messages);
	// 			console.log("initialized");
	// 		});
	// 		socket.on('pushMessage', (message: EnrichedMessage) => {
	// 			setMessages((prevMessages) => {
	// 				if (prevMessages) {
	// 					return [...prevMessages, message];
	// 				} else {
	// 					return [message];
	// 				}
	// 			});
	// 		});
	// 	} else {
	// 		setMessages(undefined);
	// 		socket.off('pushMessage');
	// 	}

	// 	return () => {
	// 		socket.off('init');
	// 		socket.off('pushMessage');
	// 	};
	// }, [isConnected]);

	return messages;
}
