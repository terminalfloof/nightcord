import express from "express";
import ViteExpress from "vite-express";
import morgan from "morgan";
import router from "./router.js"

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(morgan('dev'));

app.use("/api", router);

// eslint-disable-next-line no-undef
const PORT = parseInt(process.env.PORT ?? "3000") || 3000;
ViteExpress.listen(app, PORT, () => {
    console.log(`Listening on ${PORT}...`);
})