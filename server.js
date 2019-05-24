var express = require('express');
var app = express();
var http = require('http').Server(app);
var redis = require('redis');
var portRD = '6379'
var hostRD =  'localhost' //'172.22.209.18'
var client = redis.createClient(portRD, hostRD); 
var io = require('socket.io')(http)

app.use('/', express.static('www'));

http.listen(8000, function(){
    console.log('listening on *:8000');
});

client.on('message', function(chan, msg) {
	console.log(chan);
	console.log(msg);
  	io.sockets.emit("leapthuanio", msg);
});

client.subscribe('leapthuan');

 