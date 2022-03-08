async function poNacteni() {
  let url = "https://nodejs-3260.rostiapp.cz/date/";
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  
  let s = "Dnes je " + data.dowcz + " " + data.date + " a svátek má " + data.svatek + ".";
  document.getElementById("datum").innerHTML = s;
}

async function vypocti() {
  let c1 = document.getElementById("cislo1").valueAsNumber;
  let c2 = document.getElementById("cislo2").valueAsNumber;
  let op = document.getElementById("operace").value;

  let url = "https://nodejs-3260.rostiapp.cz/tahaky/calc?number1=" + c1 + "&number2=" + c2 + "&operation=" + op;
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  
  document.getElementById("vysledek").innerHTML = data.result;
}
