//Make Connection
var socket = io.connect('http://localhost:3000');

//Input fields
var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');

//Button 

btn.addEventListener('click',function(){
    socket.emit('chat',{
        message: message.value,
        handle: handle.value
    });
});


message.addEventListener('keypress',function(){
    socket.emit('typing', handle.value);
});
//Message
socket.on('chat',function(data){
    feedback.innerHTML = "";
    output.innerHTML += '<p><strong>' + data.handle +':</strong>' + data.message + '</p>';
});
socket.on('typing',function(data){
    feedback.innerHTML = '<p><strong>' + data +':</strong> is typing...</p>';
})