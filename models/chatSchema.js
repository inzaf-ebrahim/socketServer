const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const chatSchema = new Schema({
  message: {
    type: String,
    required: true,
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  reciever: {
    type: String,
    default: "admin",
    required: true,
  },
  time: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("chat", chatSchema);
