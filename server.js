import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = 8000;
app.use(bodyParser.json());

app.use(express.json());
app.use(cors());

app.use(cookieParser());

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("MongoDB Error:", err.message);
    process.exit(1); 
  });

app.listen(PORT, () => console.log(`server running on port ${PORT}`));