import React from 'react';
import {Message} from "../types.ts";

const MessageComponent = ({message}: {message: Message}) => {

    return (
        <div className={"message"}>
            <img src={message.author.pfp} alt={"User " + message.author.tag + "'s uploaded content"}/>
            <h1>{message.author.tag}</h1>
            <h2>{message.timestamp.toISOString()}</h2>
            <p>{message.content}</p>
        </div>
    );
};

export default MessageComponent;