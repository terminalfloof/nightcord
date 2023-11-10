import {Timestamp} from "firebase/firestore";

export type Server = {
    channels: Channel[];
    name: string;
    id: string;
}

export type Channel = {
    id: string;
    name: string;
    users: User[];
    type: "text"|"voice";
    messages: Message[];
}

export type Message = {
    content: string;
    author: User;
    timestamp: Timestamp;
}

export type User = {
    tag: string;
    pfp: string;
    cameraOn: boolean;
    micOn: boolean;
}