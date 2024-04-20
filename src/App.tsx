import Moon from "./components/Moon.tsx";
import Menu from "./components/Menu.tsx";
import Sidebar from "./components/Sidebar.tsx";
import ChatArea from "./components/ChatArea.tsx";

function App() {
    return (
        <>
            {/* Top Banner */}
            <div className={"select-none bg-chat flex items-center pl-4 gap-1.5 py-2 border-black border-b-2 h-8"}>
                <Moon />
                <h1 className="font-mplus font-black text-text -tracking-[0.75px] text-sm">Nightcord</h1>
            </div>
            {/* Main Content */}
            <div className={"h-[calc(100vh-32px)] flex"}>
                <Menu />
                <Sidebar />
                <ChatArea />
            </div>
        </>
    );
}

export default App;