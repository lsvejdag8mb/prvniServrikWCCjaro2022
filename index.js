const http = require("http");
const fs = require("fs");
const url = require("url");


let startTime = Date.now();

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
  } else if (req.url == "/stav") {
    res.writeHead(200, { "Content-type": "application/json" });
    let obj = {};
    obj.nazev = "Prvni servrik";
    obj.verze = "0.1";
    obj.casbehums = Date.now() - startTime;
    res.end(JSON.stringify(obj));
  } else if (req.url.startsWith("/kalkulacka")) {
    let params = url.parse(req.url, true).query;
    console.log(params);
    
    res.writeHead(200, { "Content-type": "application/json" });
    let obj = {};
    obj.nazev = "kalkulacka";
    obj.num1 = parseInt(params.number1);
    obj.num2 = parseInt(params.number2);
    obj.operation = params.operation;
    if (obj.operation == "add") {
      obj.result = obj.num1 + obj.num2;
    } else if (obj.operation == "subtract") {
      obj.result = obj.num1 - obj.num2;
    } else {
      obj.result = "neznama operace";
    }
    res.end(JSON.stringify(obj));
  } else {
    res.writeHead(404);
    res.end();
  }
  
}

let srv = http.createServer(main);
srv.listen(8080);
