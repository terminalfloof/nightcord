import { useEffect, useState } from "react";
import { socket } from "../providers/socket";
import { User } from "@server/types";

export default function useUserMap() {
	const [userMap, setUserMap] = useState(new Map<string, User>());
	useEffect(() => {
		socket.on("updateUsers", (users) => {
			console.log(users);
			setUserMap(new Map(users));
		});

		return () => {
			socket.off("updateUsers");
		};
	}, []);

	return userMap;
}
