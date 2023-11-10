import React, {useEffect, useState} from 'react';
import {Server} from "../types.ts";
import {db} from "../firebase.ts";
import {collection} from "firebase/firestore";
import {useCollection} from "react-firebase-hooks/firestore";

const GetServer = function (){
    const [snapshot, loading] = useCollection(
        collection(db, "/servers")
    )
    const [server, setServer] = useState<Server>();

    useEffect(() => {
        if (!snapshot) {
            
        }
    }, [snapshot])

    return [server, loading];
};

export default GetServer;