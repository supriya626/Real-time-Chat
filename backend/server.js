import express from "express";
import dotenv from "dotenv";
import { chats } from "./data/data.js";

const app = express();
dotenv.config();

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.listen(
  process.env.PORT || 5000,
  console.log(`App is listening on http://localhost:${process.env.PORT}`)
);
