// controllers/chatController.js
const User = require('../models/User');

const chatController = (io) => {
  io.on('connection', (socket) => {
    console.log('A user connected');

    // Example: Listen for 'message' event from client
    socket.on('message', (data) => {
      console.log('Message from client:', data);
      // Broadcast the message to all connected clients
      io.emit('message', data);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });
};

module.exports = chatController;
