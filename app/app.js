var express = require('express');
var app = express();
app.get('/', function(req, res) {
	res.send('<h1>Business Chat</h1>');
});

var server = app.listen(3000, function() {
	console.log('Express is listening on localhost 3000')
});


// var http = require('http');

// var myServer = http.createServer(function(req, res) {
// 	res.writeHead(200, {"Content-Type" :"text/html"});
// 	res.write('Business Chat');
// 	res.end();
// });

// myServer.listen(3000);
// console.log('Go to localhost 3000');