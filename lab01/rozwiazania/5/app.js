console.log('start app');

// odwołujemy się do zmiennej globalnej 'process' zgodnie z dokumentacją:
// https://nodejs.org/api/process.html
console.log(process.argv); // wyświetlamy tablicę z naszymi parametrami 

// pobieramy nasz nowy argument. zgodnie z dokumentacją pierwsze 2 elementy
// w tablicy zarezerwowane są dla nazwy aplikacji oraz dla pliku który jest 
// przetwarzany przez nią.
const arg = process.argv[2];

if (arg) {
    console.log('hello ' + arg);
} else {
    console.log('hello world!');
}

// uruchamiamy naszą aplikację poleceniem: node app.js
// wynikiem tego powinien być napis hello world!
// aby podać atgument uruchamiamy aplikację: node app.js Piotr
// wynikiem polecenia: hello Piotr