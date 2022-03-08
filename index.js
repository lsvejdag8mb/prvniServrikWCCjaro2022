const http = require("http");

function main(req, res) {
  console.log(req.url);
  
  res.writeHead(200, { "Content-type": "text/html" })
  res.end("<h1>Kuk!</h1>");
}

let srv = http.createServer(main);
srv.listen(8080);
