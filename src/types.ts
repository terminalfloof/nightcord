export type Server = {
    channels: Channel[];
    name: string;
    id: string;
}

export type Channel = {
    name: string;
    users: User[];
    type: "text"|"voice";
    messages: Message[];
}

export type Message = {
    content: string;
    author: User;
    timestamp: Date;
}

export type User = {
    tag: string;
    pfp: string;
    cameraOn: boolean;
    micOn: boolean;
}