const url = require("url");
const fs = require("fs");

const SOUBOR_ZPRAVY = "zpravy.json";
  
let zpravy = [];
if (fs.existsSync(SOUBOR_ZPRAVY)) {
  zpravy = JSON.parse(fs.readFileSync(SOUBOR_ZPRAVY));
}

exports.chat = function (req, res) {
  let params = url.parse(req.url, true).query;
  console.log(params);

  if (req.url.startsWith("/chat/seznamZprav")) {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify(zpravy));
  } else if (req.url.startsWith("/chat/pridejZpravu")) {
    let o = {};
    o.zprava = params.zprava;
    o.cas = Date.now();
    zpravy.push(o);

    fs.writeFileSync(SOUBOR_ZPRAVY, JSON.stringify(zpravy));
    
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify({"status": "ok"}));
  } else {
    res.writeHead(404);
    res.end();
  }
}