var express = require('express');
var socket = require('socket.io');
//App 
var app = express();
var server = app.listen(3000);
console.log("Listening to post 3000");

//Static files
app.use(express.static('public'));

//Setting up socket
var io = socket(server);

io.on('connection', function (socket) {
    console.log('Made socket connection');
    socket.on('chat', function (data) {
        io.sockets.emit('chat', data)
    });

    socket.on('typing', function (data) {
        socket.broadcast.emit('typing', data)
    });
});