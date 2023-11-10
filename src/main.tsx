import ReactDOM from 'react-dom/client'
import {createContext} from "react";
import App from './App.tsx'
import './index.css'
export const ServerContext = createContext<Server>({
    channels: [
        {name: "作業", type: "text", messages: [
                {author: {
                    tag: "floof",
                    pfp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbGItwj--b6gKadFy6Cpk6ooRZCaB30EfQiAn7SkA&s"
                },
                content: "i think im going crazy",
                timestamp: new Date(1699514191)}
            ]},
        {name: "not 作業", type: "text"},
        {name: "失敗事", type: "text"}
    ],
    name: "25時、ナイトコードで"
})
import {Server} from "types.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <App />
)
