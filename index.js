const http = require("http");
const fs = require("fs");

function main(req, res) {
  console.log("url: " + req.url);

  if (req.url == "/") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(fs.readFileSync("index.html"));
  } else if (req.url == "/style.css") {
    res.writeHead(200, { "Content-type": "text/css" });
    res.end(fs.readFileSync("style.css"));
  } else if (req.url == "/script.js") {
    res.writeHead(200, { "Content-type": "text/javascript" });
    res.end(fs.readFileSync("script.js"));
  } else if (req.url.startsWith("/obrazky/")) {
    res.writeHead(200, { "Content-type": "image/png" });
    res.end(fs.readFileSync(req.url.substr(1)));
  } else {
    res.writeHead(404);
    res.end();
  }
  
}

let srv = http.createServer(main);
srv.listen(8080);
