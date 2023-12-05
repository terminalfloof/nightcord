import {Router} from "express";
import db from "./db.js";

const router = Router();

router.get("/servers", async (req, res) => {
    try {
        const servers = await db.server.findMany({
            include: {
                channels: true
            }
        });
        res.status(200).json(servers).end();
    } catch (error) {
        res.status(400).send(error).end();
    }
})

router.get("/channels/:channel/messages", async (req, res) => {
    try {
        const result = await db.channel.findFirst({
            where: {
                id: req.params.channel
            },
            include: {
                messages: {
                    include: {
                        author: true
                    }
                }
            }
        })
        res.status(200).json(result).end()
    } catch (err) {
        res.status(400).send(err).end();
    }
})

export default router;