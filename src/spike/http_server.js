var http = require('http');

var server = http.createServer();

server.on("request", function(request, response) {
	console.log("Received request");

	var body = "<html><head><title>Node http server spike</title></head>" + 
	"<body><p>This is a spike of Node HTTP Server</p></body>";

	response.end(body);
});

server.listen(8080);

console.log("Server started");
