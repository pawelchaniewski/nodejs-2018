console.log('start app'); // wyświetlamy informację że nasza aplikacja jest uruchomiona

const os = require('os'); // wczytujemy wbudowany moduł OS i zapisujemy go do zmiennej os
const username = os.userInfo().username; // pobieramy dane o użytkowniku i zapisujemy do zmiennej username
console.log(username); // wyświetlamy nazwę użytkownika w naszym terminalu

const fs = require('fs'); // wczytujemy wbudowany moduł FS(File System) i zapisujemy go do zmiennej pod nazwą fs

// wywołujemy funkcję asynchroniczną appendFile z zaczytanego wcześniej modułu
// i zapisujemy nazwę użytkownika
// wykorzystujemy informację z dokumentacji node.js: https://nodejs.org/dist/latest-v10.x/docs/api/fs.html#fs_filehandle_appendfile_data_options
fs.appendFile('b-append.txt', username, function() {});

// uruchamiamy kilka razy naszą aplikację: node b-append.js
// plik o nazwie b-append.txt powinien zostać stworzony z nazwą użytkownika