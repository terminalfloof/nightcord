import './App.css'
import Menu from "./components/Menu.tsx";
import Chat from "./components/Chat.tsx";
import Sidebar from "./components/Sidebar.tsx";
import {ServerContext} from "./main.tsx";
import getServer from "./hooks/getServer.ts";


function App() {
    const [server, status] = getServer();

    return (
    <>
        <ServerContext.Provider value={server}>
            {/*<Menu />*/}
            <div id={"sidebarChannelName"}>
                <h1>{status ? "loading..." : server?.name}</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                    <path d="M1 1L7 7L13 1" stroke="#DDD6E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <div id={"channelName"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <circle cx="12.5" cy="12.5" r="12.5" fill="#DDD6E5"/>
                    <circle cx="15.4166" cy="12.9167" r="9.58333" fill="#50476A"/>
                    <circle cx="12.3958" cy="13.2292" r="1.5625" fill="#DDD6E5"/>
                    <circle cx="19.5833" cy="13.3333" r="1.5625" fill="#DDD6E5"/>
                </svg>
                {/*{status ? channel.name : "loading..."}*/}
            </div>
            {/*<Sidebar {...channelProps}  />*/}
            {/*<Chat {...channelProps} />*/}
        </ServerContext.Provider>
    </>
  )
}

export default App
