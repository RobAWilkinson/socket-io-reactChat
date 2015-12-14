var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var messages = [];

io.on('connection', function(socket) {

  io.emit('messages', messages);

  console.log('user connected');
  socket.on('message', function(msg){
    messages.push(msg);
    console.log(messages);
    io.emit('messages', messages);
  });
});
app.use(express.static([__dirname, '/../'].join(''))); //serves the index.html
http.listen(3000, function() {
  console.log('listen on 3000');
}); //listens on port 3000 -> http://localhost:3000/
