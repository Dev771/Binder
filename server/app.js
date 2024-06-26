import express, { json, urlencoded } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("App Started!!");
});