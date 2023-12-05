import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Server} from "./types.ts";
import {createContext} from "react";
import {Socket} from "socket.io-client";
export const ServerContext = createContext<Server & {socket: Socket} | null>(null);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <App />
)
