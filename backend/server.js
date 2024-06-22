const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");

const app = express();
dotenv.config();

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.listen(
  process.env.PORT || 5000,
  console.log(`App is listening on http://localhost:${process.env.PORT}`)
);
