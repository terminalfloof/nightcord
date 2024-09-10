import Moon from "./components/Moon.tsx";
import Menu from "./components/Menu.tsx";
import Sidebar from "./components/Sidebar.tsx";
import ChatArea from "./components/ChatArea.tsx";
import useSocket from "./hooks/useSocket.tsx";
import useMessages from "./hooks/useMessages.tsx";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import useUserMap from "./hooks/userUserMap.tsx";

function App() {
	const { isConnected } = useSocket();
	const messages = useMessages();
	const userMap = useUserMap();

	return (
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
					className={`ml-auto size-3 ${
						isConnected
							? messages
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
	);
}

export default App;
