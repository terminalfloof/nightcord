import Moon from "./components/Moon.tsx";
import Menu from "./components/Menu.tsx";
import Sidebar from "./components/Sidebar.tsx";
import ChatArea from "./components/ChatArea.tsx";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient, wsClient } from "./utils/trpc.ts";
import { useEffect, useState } from "react";


function App() {
	const [status, setStatus] = useState<'connecting' | 'open' | 'closed'>('closed');
	const ws = wsClient.connection;

	useEffect(() => {
		if (!ws) return;

		const socket = ws.ws;

		const updateStatus = () => {
			console.log(ws.state);
			setStatus(ws.state)
		};

		setStatus(ws.state);

		socket.addEventListener('open', updateStatus);
		socket.addEventListener('close', updateStatus);
		return () => {
			socket.removeEventListener('open', updateStatus);
			socket.removeEventListener('close', updateStatus);
		};
	}, []);

	return (
		<QueryClientProvider client={queryClient}>
			<Theme
				accentColor="iris"
				appearance="dark"
				panelBackground="translucent"
			>
				{/* Top Banner */}
				<div
					className={
						"select-none bg-chat flex items-center pl-4 gap-1.5 py-2 border-black border-b-2 h-8"
					}
				>
					<Moon />
					<h1 className="font-mplus1 font-black text-text -tracking-[0.75px] text-sm">
						Nightcord
					</h1>

					<span
						aria-label=""
						className={`ml-auto size-3 ${!(status == 'closed')
							? status == 'open'
								? "bg-emerald-300"
								: "bg-yellow-300"
							: "bg-red-400"
							} mr-2 rounded-full`}
					/>
				</div>
				{/* Main Content */}
				<div className={"h-[calc(100vh-32px)] flex"}>
					<Menu />
					<Sidebar />
					<ChatArea />
				</div>
			</Theme>
		</QueryClientProvider>
	);
}

export default App;
