/* eslint-disable prefer-const */
import {useEffect, useState} from 'react';
import {Channel, Message, Server, User} from "../types.ts";
import {collection, doc, getDoc, limit, onSnapshot, orderBy, query} from "firebase/firestore";
import {db} from "../firebase.ts";

const GetMessages = (server: Server, channel: Channel, channelIndex: number) => {
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(query(collection(db, "servers", server.id, "channels", channel.id, "messages"),
                orderBy("timestamp", "asc"),
                limit(100)),
            snapshot => {
                // clear messages.
                setMessages([])
                snapshot.forEach(message => {
                    let messageData: Message = message.data() as Message;
                    getDoc(doc(db, (messageData.author as User & {path: string}).path)).then(authorData => {
                        console.log(authorData.data());
                        messageData.author = authorData.data() as User ?? {
                            tag: "user not found",
                            pfp: "https://i.pinimg.com/564x/8e/ec/ef/8eecefe3ec0bbff23c7d81272a12caeb.jpg",
                            cameraOn: false,
                            micOn: false
                        }
                        setMessages(prev => [...prev, messageData])
                    })
                })
            })
        return () => unsubscribe();
    }, [channelIndex])

    return messages;
};

export default GetMessages;