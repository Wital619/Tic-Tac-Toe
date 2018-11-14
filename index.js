const express = require('express');
const http = require('http');
const socket = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socket(server);

let rooms = 0;

app.use(express.static('dist'));

io.on('connection', socket => {
  socket.on('createGame', data => {
    socket.join(`room-${++rooms}`);
    socket.emit('newGame', { name: data.name, room: `room-${rooms}` });
  });

  socket.on('joinGame', data => {
    const room = io.nsps['/'].adapter.rooms[data.room];

    if (room && room.length === 1) {
      socket.join(data.room);
      socket.broadcast.to(data.room).emit('player1', {});
      socket.emit('player2', { name: data.name, room: data.room });
  
    } else {
      socket.emit('err', { message: 'The room is full or not exist!' });
    }
  });

  socket.on('playTurn', data => {
    socket.broadcast.to(data.room).emit('turnPlayed', {
      square: data.square,
      room: data.room
    });
  });

  socket.on('gameEnded', data => {
    socket.broadcast.to(data.room).emit('gameEnd', data);
  });
});

server.listen(process.env.PORT || 5000);