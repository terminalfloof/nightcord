import {Server} from "../types.ts";

const GetServer = async function (): Promise<Server | null> {
    const response = await fetch("/api/servers");
    if (response.status !== 200) return null;
    const servers = await response.json();
    console.log(servers[0]);
    if (!servers) alert("NO SERVERS PANIC PANIC")
    return servers[0];
};

export default GetServer;