import { useEffect, useState } from "react";
import { socket } from "../providers/socket";

export default function useSocket() {
	const [isConnected, setIsConnected] = useState(socket.connected);
	const [id, setId] = useState(socket.id);

	useEffect(() => {
		const onConnect = () => {
			setIsConnected(true);
			setId(socket.id);
		};
		const onDisconnect = () => {
			setIsConnected(false);
			setId("");
		};

		socket.on("connect", onConnect);
		socket.on("disconnect", onDisconnect);

		return () => {
			setId("");
			socket.off("connect", onConnect);
			socket.off("disconnect", onDisconnect);
		};
	}, []);

	useEffect(() => {
		console.log(id);
	}, [id]);

	return { isConnected, id };
}
