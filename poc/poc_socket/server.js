// var io = require('socket.io')(80);
// var tw = require('node-tweet-stream')(cfg);
// tw.track('socket.io');
// tw.track('javascript');
// tw.on('tweet', function(tweet){
//   io.emit('tweet', tweet);
// });

var server = require('http').createServer(handler);
var io = require('socket.io')(server);
var fs = require('fs');


function handler (req, res) {
	fs.readFile(__dirname + '/index.html', function (err, data) {
		if (err) {
		  	res.writeHead(500);
		  	return res.end('Error loading index.html');
		}

		res.writeHead(200);
		res.end(data);
	});
}

server.on('emit', function(message){
	socket.broadcast.emit(mesasage);
}

io.on('connection', function(socket){
	socket.emit('news', { hello: 'world' });
	socket.on('event', function(data){
		console.log("success");
		console.log(data);
	});
	socket.on('disconnect', function(){
		console.log("error")
	});
});


// server.listen(3000);
server.listen(3000, function(){
    console.log('Listening on port 3000');
});