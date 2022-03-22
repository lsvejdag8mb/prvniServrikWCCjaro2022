console.log(window.location.href);

async function ukazStavServeru() {
  let url = window.location.href + "stav";
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  
  let s = data.nazev + " (" + data.verze + "), čas běhu " + data.casbehums + "ms.";
  document.getElementById("stavserveru").innerHTML = s;
}

async function poNacteni() {
  setInterval(ukazStavServeru, 1000);
  
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

  let url = window.location.href + "kalkulacka?number1=" + c1 + "&number2=" + c2 + "&operation=" + op;
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  
  document.getElementById("vysledek").innerHTML = data.result;
}
