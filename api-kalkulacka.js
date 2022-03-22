const url = require("url");

exports.kalkulacka = function (req, res) {
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
}