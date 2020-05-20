// Chiedo l'eta e i chilometri all'utente
var chilometri = parseInt( prompt( 'Quanti chilometri devi percorrere?' ) );
var eta = parseInt( prompt( 'Quanti anni hai?' ) );

// Creo il prezzo del biglietto intero
var prezzoBiglietto = parseFloat( Math.round( ( chilometri * 0.21 ) * 100 ) / 100 ).toFixed( 2 );

// Calcolo lo sconto per minorenni e over65
var scontoMinorenni = ( ( prezzoBiglietto * 20 ) /100 );
var scontoAnziani = ( ( prezzoBiglietto * 40 ) /100 );

// Calcolo il prezzo scontato dei biglietti
var prezzoBigliettoMinorenni = parseFloat( Math.round( ( prezzoBiglietto - scontoMinorenni ) * 100 ) / 100 ).toFixed( 2 );
var prezzoBigliettoAnziani = parseFloat( Math.round( ( prezzoBiglietto - scontoAnziani ) * 100 ) / 100 ).toFixed( 2 );

// Controllo i dati inseriti dall'utente e creo le varie condizioni
if ( ( isNaN( chilometri ) ) || ( chilometri == 0 ) ) {
  document.getElementById('prezzo').innerHTML = 'Hai inserito un valore non valido. Devi indicare i chilometri con un numero intero diverso da zero.';
} else if ( ( isNaN( eta ) ) || ( eta == 0 ) ) {
  document.getElementById('prezzo').innerHTML = 'Hai inserito un valore non valido. Devi indicare l\'età con un numero intero diverso da zero.';
} else if ( eta <= 6 ) {
  document.getElementById('prezzo').innerHTML = 'Il tuo biglietto è gratis.';
} else if ( ( eta > 6 ) && ( eta < 18 ) ) {
  document.getElementById('prezzo').innerHTML = 'Il prezzo del tuo biglietto è ' + prezzoBigliettoMinorenni + ' €.';
} else if ( eta >= 65 ) {
  document.getElementById('prezzo').innerHTML = 'Il prezzo del tuo biglietto è ' + prezzoBigliettoAnziani + ' €.';
}  else {
  document.getElementById('prezzo').innerHTML = 'Il prezzo del tuo biglietto è ' + prezzoBiglietto + ' €.';
}
