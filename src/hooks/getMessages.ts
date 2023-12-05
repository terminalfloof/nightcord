/* eslint-disable prefer-const */
import {Channel, Message} from "../types.ts";

const GetMessages = async (channel: Channel | undefined): Promise<Message[]> => {
    if (!channel?.id) return [];
    const response = await fetch(`/api/channels/${channel.id}/messages`)
    if (response.status !== 200) return [];
    const data = await response.json();
    console.log(data);
    return data.messages;
};

export default GetMessages;