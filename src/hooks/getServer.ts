import {useEffect, useState} from 'react';
import {Channel, Server} from "../types.ts";
import {db} from "../firebase.ts";
import {collection, onSnapshot} from "firebase/firestore";
import {useCollection} from "react-firebase-hooks/firestore";

const GetServer = function () {
    const [snapshot] = useCollection(collection(db, "/servers"))

    const [server, setServer] = useState<Server>();

    useEffect(() => {
        let unsubscribe = () => {
        };
        if (snapshot) {
            // if snapshot exists, fetch channels collection
            const id = snapshot.docs[0].id;

            // subscribe to channels collection
            unsubscribe = onSnapshot(collection(db, `/servers/${id}/channels`), channelSnapshot => {
                const channels = channelSnapshot.docs.map((doc) => (doc.data() as Channel))
                console.log(channels);
                setServer({
                    name: snapshot.docs[0].data().name, id: snapshot.docs[0].id, channels: channels
                })
            });
        }
        // unsubscribe to channels collection when component unmounts to prevent memory leaks
        return () => unsubscribe();
    }, [snapshot])

    return [server];
};

export default GetServer;