import React from 'react';
import {useCollection} from "react-firebase-hooks/firestore";
import {collection} from "firebase/firestore";
import {db} from "../firebase.ts";

const Channel = ({channel, selected, select}) => {

    // load channels
    [channels, loading, error] = useCollection(collection(db, ""))

    return (
        <div onClick={select} className={selected ? "channel selected" : "channel"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 25 25" fill="none">
                <circle cx="12.5" cy="12.5" r="12.5" fill="#DDD6E5"/>
                <circle cx="15.4166" cy="12.9167" r="9.58333" fill={selected ? "#51496B" : "#3F365B"}/>
                <circle cx="12.3958" cy="13.2292" r="1.5625" fill="#DDD6E5"/>
                <circle cx="19.5833" cy="13.3333" r="1.5625" fill="#DDD6E5"/>
            </svg>
            <h1>{channel ? channel.name : "loading..."}</h1>
        </div>
    );
};

export default Channel;