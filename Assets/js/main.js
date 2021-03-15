// La pagina espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri
// che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri,
// il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// Scrivo con un innerHTML 5 numeri generati casualmente(fun Randomnumber)
var randomNumbers = []
var userNumbers = []
for (var i = 0; i < 5; i++) {
  randomNumberInRange(1, 100)
  randomNumbers.push(parseInt(randomNumberInRange(1, 100)))
}

$("#random-number").text(randomNumbers);
// Faccio partire un timer (setTimeout) di duration (30s)
  // Faccio scomparire l'array di numeri casuali dal documento
setTimeout(function () {
$("#random-number").hide()
  setTimeout(function () {
  // Con un ciclo (for,while) di 5 volte faccio inserire ogni
  // volta all'utente (prompt) un numero che ha visto precedentemente
    for (var i = 0; i < 5; i++) {
    var userNumber = parseInt(prompt("Inserisci uno dei numeri visti in precedenza"))
    userNumbers.push(parseInt(userNumber))
    }
    $("#random-number").show()

    $("#random-number").text(randomNumbers);

    $("#user-number").text(userNumbers);
  })
}, 2000)
// Stampo nuovamente array numeri casuali e numeri dell'utente
  // Scrivo quali e quanti numeri sono stati indovinati
  // Es. (verdi numeri indovinati) rossi (errati)
  //
  // $("#random-number").text(randomNumbers);
  //
  // $("#user-number").text(userNumbers);






// FUNCTIONS
function randomNumberInRange(min, max) {
  if (isNaN(min) || isNaN(max)) {
    console.log("Non sono numeri");
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
