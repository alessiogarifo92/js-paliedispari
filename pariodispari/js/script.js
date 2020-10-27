// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// utente scegli numero da 1 a 5
var numero = parseInt(prompt("inserisci un numero tra 1 e 5"));

console.log(numero);

// utente dichiara se pari o dispari
var scelta = prompt("scegli se risultato sarà pari o dispari");
document.getElementById('utente').innerHTML = "Hai scelto come numero " + numero + " e hai detto che uscirà " + scelta;
console.log(scelta);

var sceltaComputer = numeroComputer(5);
document.getElementById('computer').innerHTML = "Il computer ha scelto " + sceltaComputer;
console.log(sceltaComputer);

var somma = somma(numero , sceltaComputer);
console.log(somma);

var pariODispari = "";
if (somma % 2 === 0 ) {
  pariODispari = "pari";
console.log("risultato è pari");
} else {
  pariODispari = "dispari";
console.log("risultato è dispari");
}
document.getElementById('risultato').innerHTML = "La somma dei due numeri è " + somma + " che risulta essere un numero " + pariODispari;

// dichiariamo chi ha vinto
if (pariODispari === scelta) {
  document.getElementById('conclusione').innerHTML = "complimenti hai vinto!!!"
console.log("complimenti hai vinto!!!");
} else {
  document.getElementById('conclusione').innerHTML = "mi dispiace, hai perso!"
console.log("mi dispiace, hai perso!");
}

// gruppo utilities functions
// funzione per numero random computer
function numeroComputer(max) {
return Math.floor(Math.random() * Math.floor(max)) + 1;
}

// funzione per somma utente e computer e stabiliamo se pari o dispari
function somma(numeroUtente , numeroComputer) {
var risultato = numeroUtente + numeroComputer;
return risultato;
}
