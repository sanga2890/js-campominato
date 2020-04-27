// Campo Minato

// Il computer deve generare 16 numeri casuali tra 1 e 100, che saranno le "mine";


function list_number (min,max)
{
  var number = Math.floor(Math.random() * max-min+1)+min;
  return number;
}

// funzione per trovare un componente nella lista;
function check (lista, component  ) {
  var verify = false;

  for (var i = 0; i < lista.length; i++) {
    if (lista[i] == component) {
      verify = true;

    }
  }
  return verify;
}

var mine = [];

// ciclo do while fino a quando arrivo a 16 elementi nell'array;
do {
    // genero un nuovo random
var new_random = list_number(1,100);

// verificare che se il numero è presente nell'array;
if (mine.includes(new_random) == false)  {
  mine.push(new_random);

}

} while (mine.length < 16);
// stampo l'array
console.log(mine);


// Per continuare la partite creiamo una variabile true;
// diventerà falsa se fai 84 giocate (100-16) o se trovi una mina;

var continue_play = true;
var giocate_vinte = 0;
var numeri_utente = [];

while (continue_play == true)
{
  var insert_number = parseInt(prompt('Inserisci un numero da 1 a 100:'));
  var trovato_lista = check(numeri_utente, insert_number);
  var trovato = check(mine, insert_number);

  if (trovato_lista == true) {
    alert('Attenzione! Inserisci un numero valido.')
  }
  else
  { numeri_utente.push(insert_number);
    if (trovato == true) {
      continue_play = false;

    } else {
      giocate_vinte = giocate_vinte + 1 ;

      if (giocate_vinte >= 84) {
        continue_play = false;

      }
    }
  }
}
console.log('Numeri giocati: ' + numeri_utente);

if (giocate_vinte == 84) {
  console.log('Complimenti! Hai Vinto!');

} else {
  console.log('Mi dispiace, hai perso! Il numero totale di giocate fatte è: ' + giocate_vinte);

}
