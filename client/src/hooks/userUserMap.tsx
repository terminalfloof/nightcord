import { useEffect, useState } from 'react';
import { socket } from '../providers/socket';
import { User } from '@server/types';

export default function useUserMap(): Map<string, User> {
	const [userMap, setUserMap] = useState(new Map<string, User>());
	useEffect(() => {
		socket.on('updateUsers', (users: [string, User][]) => {
			console.log(users);
			setUserMap(new Map(users));
		});

		return () => {
			socket.off('updateUsers');
		};
	}, []);

	return userMap;
}
