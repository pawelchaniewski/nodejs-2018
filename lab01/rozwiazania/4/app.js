console.log('start app'); // wyświetlamy informację o rozpoczęciu działania aplikacji

// wczytujemy nasz moduł my-math, aby to wykonać podajemy ścieżę relatywną do naszego pliku
// w tym momencie zadeklarowana zmienna myMath będzie zawierała odwołanie do pliku my-math.js
// zmienna będzie zawietała dostęp do wszystkich elementów które zostały wyeksportowane 
// poprzez np.: 'module.exports.Pi = 3.14'
const myMath = require('./my-math');

console.log(myMath.Pi); // wyświetlamy w konsoli zmienną Pi z naszego nowego modułu my-math.js

console.log(myMath.add(3, 6)); // wyświetlamy wynik funkcji dodawania z naszego modułu my-math.js
console.log(myMath.sub(3, 6)); // wyświetlamy wynik funkcji odejmowania z naszego modułu my-math.js

// uruchamiamy aplikację wpisując w konsoli: node app.js