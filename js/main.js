// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato”
// o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio,
//  cioè il numero di volte che l’utente ha inserito un numero consentito.

var randArray = [];
console.log(genNum(randArray,100));







// functions
function genNum(array, max){
  // ciclo per contare fino a 16
  while (array.length < 16) {
    // variabile per generare un numero fino a 100
    var randNum = randomNumber(1, max);

    // verifico che il numero non sia stato già generato
    if (!array.includes(randNum)) {
      array.push(randNum);
    }
  }
  return array;
}

function randomNumber(min,max){
  return parseInt(Math.random() * (max - min) + min);
}
