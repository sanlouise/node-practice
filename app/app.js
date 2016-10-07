var http = require('http');

var myServer = http.createServer(function(req, res) {
	res.writeHead(200, {"Content-Type" :"text/plain"});
});
