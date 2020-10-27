// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// chiediamo utente di inserire una Parola

var parola = prompt("inserisci una parola");

document.getElementById('parola').innerHTML = "La parola da te inserita è : " + parola;
console.log(parola);

var verifica = (reverseString(parola));

if (verifica === parola) {
  document.getElementById('risultato').innerHTML = "La parola da te inserita è palindroma";
  console.log("parola palindroma");
} else {
  document.getElementById('risultato').innerHTML = "La parola da te inserita non è palindroma";
  console.log("non palindroma");
}


// creiamo funzione per capire se parola palindroma
function reverseString(str) {
    return str.split("").reverse().join("");
}
