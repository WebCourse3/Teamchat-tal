const express = require('express');
const app = express();
const port = 3000;
var http = require('http').Server(app);
var io = require('socket.io')(http);

var router = require('./router/router');

app.use('/', router);

app.listen(port, function () {
	console.log('Example app listening on port '+ port + '!')
});


io.on('connection', function(socket) {
	console.log('a user connected');
	socket.on('disconnect', function(){
		console.log('user disconnected');
	});
	socket.on('chat message', function(msg, userName, ui){
		socket.broadcast.emit('chat message', msg, userName, ui);
	});
});
http.listen(port, function(){
	console.log('listening on ' + port);
});

module.exports.app = app;