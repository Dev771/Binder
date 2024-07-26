import express, { json, urlencoded } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import config from './config/config.json' with { type: 'json' };

import UserRouter from './router/UserRoutes.js';

const app = express();

app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());

app.use("/user", UserRouter);

app.get("/", (req, res) => {
    res.send("App is Running MF!!!");
});


const PORT = process.env.PORT || 3000;

mongoose.connect(`mongodb+srv://${config.userName}:${config.password}@cluster0.1c9pb7g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`, {})
    .then(() => {
        app.listen(PORT, () => {
            console.log("App Started!!");
        });
    })
    .catch((error) => console.log(error));