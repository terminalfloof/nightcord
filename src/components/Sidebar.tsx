import React, {useContext} from 'react';
import {ServerContext} from "../main.tsx";
import Channel from "./Channel.tsx";

const Sidebar = ({setChannel, channel}) => {

    return (
        <div id={"sidebar"}>
            <div id={"textChannels"}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <g clipPath="url(#clip0_8_82)">
                            <path d="M3.33337 16.6667H5.83337" stroke="#DDD6E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M11.6666 16.6667H17.5" stroke="#DDD6E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M5.75 12.5H11.5" stroke="#DDD6E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8.5 5.25L13.3333 16.6667" stroke="#DDD6E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4.16663 16.6667L9.16663 3.33334H10.8333L16.6666 16.6667" stroke="#DDD6E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_8_82">
                                <rect width="20" height="20" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <h1>テキストチャット</h1>
                </div>
                {server.channels.filter(channel => channel.type == "text").map((item, index) => {
                    return <Channel key={index} channel={item} selected={channel.name == item.name} select={() => setChannel(channel.find(value => value.name==item.name))}/>
                })}
            </div>
        </div>
    );
};

export default Sidebar;