var express = require('express');
var socket = require('socket.io');
//App 
var app = express();
var port = process.env.PORT || 8000;

var server = app.listen(port, "0.0.0.0", function () {
    console.log("Listening on Port 8000");
});

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