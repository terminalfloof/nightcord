import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { trpc } from '../utils/trpc';

export default function useUserMap(): Map<string, string> {
	const [userMap, setUserMap] = useState(new Map<string, string>());
	const userQuery = useQuery(trpc.user.getAll.queryOptions());
	// useEffect(() => {
	// 	socket.on('updateUsers', (users: [string, User][]) => {
	// 		console.log("users updated...");
	// 		console.log(users);
	// 		setUserMap(new Map(users));
	// 	});

	// 	return () => {
	// 		socket.off('updateUsers');
	// 	};
	// }, []);

	return userMap;
}
