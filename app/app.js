var http = require('http');

var myServer = http.createServer(function(req, res) {
	res.writeHead(200, {"Content-Type" :"text/plain"});

	res.write('Business Chat');
	res.end();
});

myServer.listen(3000);