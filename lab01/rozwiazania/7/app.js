console.log('start app'); // wyświetlamy informację o rozpoczęciu działania aplikacji

// wczytujemy nasz moduł my-math, aby to wykonać podajemy ścieżę relatywną do naszego pliku
// w tym momencie zadeklarowana zmienna myMath będzie zawierała odwołanie do pliku my-math.js
// zmienna będzie zawietała dostęp do wszystkich elementów które zostały wyeksportowane 
// poprzez np.: 'module.exports.Pi = 3.14'
const myMath = require('./my-math');

const a = Number(process.argv[2]); // pobieramy pierwszą liczbę i rzutujemy ją na typ number
const b = Number(process.argv[3]); // pobieramy drugą liczbę i rzutujemy ją na typ number
const operator = process.argv[4];
if (operator === '+') {
    console.log(myMath.add(a, b)); // wyświetlamy wynik funkcji dodawania z naszego modułu my-math.js
} else {
    console.log(myMath.sub(a, b)); // wyświetlamy wynik funkcji odejmowania z naszego modułu my-math.js
}

// uruchamiamy aplikację wpisując w konsoli: node app.js 4 7 +
// uruchamiamy aplikację wpisując w konsoli: node app.js 4 7 -