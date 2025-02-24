import { useEffect, useState } from 'react';
import useSocket from './useSocket';
import { Message, User } from '@server/types';
import { socket } from '../providers/socket';

type EnrichedMessage = Message & { author: User };

export default function useMessages() {
	const isConnected = useSocket();
	const [messages, setMessages] = useState<EnrichedMessage[] | undefined>();

	useEffect(() => {
		if (isConnected) {
			socket.on('init', (messages: EnrichedMessage[] | undefined) => {
				setMessages(messages);
			});
			socket.on('pushMessage', (message: EnrichedMessage) => {
				setMessages((prevMessages) => {
					if (prevMessages) {
						return [...prevMessages, message];
					} else {
						return [message];
					}
				});
			});
		} else {
			setMessages(undefined);
			socket.off('pushMessage');
		}

		return () => {
			socket.off('init');
			socket.off('pushMessage');
		};
	}, [isConnected]);

	return messages;
}
