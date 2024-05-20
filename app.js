const express = require("express");
const app = express();
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
app.use(cors());
require("dotenv").config();
require("./config/config");
const chatSchema = require("./models/chatSchema");
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
const commonRouter = require("./routes/commonRouter");
app.use("/", commonRouter);



io.on("connection", async (socket) => {
  console.log("a user connected ");
  socket.on("private message", async (data) => {
    const chat = data.message;
    const sender = data.id;
    const message = new chatSchema({
      message: chat,
      sender,
    });
    await message.save();
    io.emit("chat message", chat);

    console.log("Received message from client:", data);
  });
});

httpServer.listen(3000, () => {
  console.log("listening on *:3000");
});
