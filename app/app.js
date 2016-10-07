var express = require('express');
var app = express();
var dataFile = require('./data/data.json')

app.set( 'port', process.env.PORT || 3000 );

app.get('/', function(req, res) {
	res.send('<h1>Business Chat</h1>');
});

var server = app.listen(app.get('port'), function() {
	console.log('Express is listening on localhost ' + app.get('port'))
});


// var http = require('http');

// var myServer = http.createServer(function(req, res) {
// 	res.writeHead(200, {"Content-Type" :"text/html"});
// 	res.write('Business Chat');
// 	res.end();
// });

// myServer.listen(3000);
// console.log('Go to localhost 3000');