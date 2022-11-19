// HTTP(S)/1.1 keepAlive by Default
const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("Hello, World!");
}

const server = http.createServer(requestListener);
server.listen(8080);

/*
curl -i http://localhost:8080
默认响应头 Keep-Alive: timeout=5
*/