var express = require('express');
var app = express();
var http = require('http').Server(app);
var redis = require('redis');
//Connection parameters to Redis Pub/Sub channel in server
var portRD = '6379'
var hostRD =  '127.0.0.1'
var client = redis.createClient(portRD, hostRD); 
var io = require('socket.io')(http)
//static public folder which contains the html files
app.use('/', express.static('www'));
//The server runs on port 8000
http.listen(8000, function(){
    console.log('listening on *:8000');
});
//The event listener of redis subscriber, every time the server receives a message, it sends this message to client by WebSocket protocol of Socket IO
client.on('message', function(chan, msg) {
	//The message is sent to the broadcast leapthuanio 
	io.sockets.emit("leapthuanio", msg);
});
client.subscribe('leapthuan');

 