import dotenv from 'dotenv';
import express from 'express';
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from 'cors';
const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(cookieParser());
dotenv.config();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/login', (req, res) => {
  res.send('Pleases login yourself');
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});