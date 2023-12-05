import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Server} from "./types.ts";
import {createContext} from "react";
export const ServerContext = createContext<Server | null>(null);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <App />
)
