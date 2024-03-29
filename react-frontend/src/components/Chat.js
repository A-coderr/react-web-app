const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');
const moment = require('moment');



// Idea Service
class ChatService {
  constructor() {
    this.messages = [];
  }

  async find() {
    return this.messages;
  }

  async create(data) {
    const message = {
      id: this.messages.length,
      text: data.text,
      tech: data.tech,
      viewer: data.viewer
    };

    message.time = moment().format('h:mm:ss a');

    this.messages.push(message);

    return message;
  }
}

const app = express(feathers());

// Parse JSON
app.use(express.json());
// Config Socket.io realtime APIs
app.configure(socketio());
// Enable REST services
app.configure(express.rest());
// Register services
app.use('/chat', new ChatService());

// New connections connect to stream channel
app.on('connection', conn => app.channel('stream').join(conn));
// Publish events to stream
app.publish(data => app.channel('stream'));

const PORT = process.env.PORT || 3030;

app
  .listen(PORT)
  .on('listening', () =>
    console.log(`Realtime server running on port ${PORT}`)
  );

app.service('messages').create({
  text: 'Build a cool app',
  tech: 'Node.js',
  viewer: 'John Doe'
});