import db from "./db.js";

const result = await db.channel.findFirst({
    where: {
        id: "de398208-6384-4640-9e5a-2236ab893cba"
    },
    include: {
        messages: {
            include: {
                author: true
            }
        }
    }
})

console.log(result);