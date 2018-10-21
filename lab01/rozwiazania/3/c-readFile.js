console.log('start app'); // wyświetlamy informację że nasza aplikacja jest uruchomiona

const fs = require('fs'); // wczytujemy wbudowany moduł FS(File System) i zapisujemy go do zmiennej pod nazwą fs

// wywołujemy funkcję asynchroniczną readFile z zaczytanego wcześniej modułu
// wykorzystujemy informację z dokumentacji node.js: https://nodejs.org/dist/latest-v10.x/docs/api/fs.html#fs_fs_readfile_path_options_callback
fs.readFile('b-sync.txt', 'utf-8', function(error, data) {
    console.log(data); // wyświetlamy zawartość wczytanego pliku
});

// uruchamiamy naszą aplikację: node c-readFile.js