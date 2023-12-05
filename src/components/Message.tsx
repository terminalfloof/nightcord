import {Message} from "../types.ts";

const MessageComponent = ({message}: {message: Message}) => {

    console.log(message);
    return (
        <div className={"message"}>
            <img src={message.author.pfp} alt={"User " + message.author.tag + "'s uploaded content"}/>
            <div>
                <h1>{message.author.tag}</h1>
                <h2>{(new Date(message.timestamp.toString())).toLocaleString()}</h2>
            </div>
            <p>{message.content}</p>
        </div>
    );
};

export default MessageComponent;