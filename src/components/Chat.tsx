import React, {useContext} from 'react';
import {ServerContext} from "../main.tsx";
import Message from "./Message.tsx";

const Chat = ({setChannelIndex, channelIndex}) => {
    const server = useContext(ServerContext);
    return (
        <div id={"chat"}>
            {server.channels[channelIndex].messages?.map((message, index) => <Message key={index} message={message} />)}
        </div>
    );
};

export default Chat;