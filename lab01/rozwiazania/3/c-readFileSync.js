console.log('start app'); // wyświetlamy informację że nasza aplikacja jest uruchomiona

const fs = require('fs'); // wczytujemy wbudowany moduł FS(File System) i zapisujemy go do zmiennej pod nazwą fs

// wywołujemy funkcję asynchroniczną readFileSync z zaczytanego wcześniej modułu
// wykorzystujemy informację z dokumentacji node.js: https://nodejs.org/dist/latest-v10.x/docs/api/fs.html#fs_fs_readfilesync_path_options
const data = fs.readFileSync('b-sync.txt');
console.log(data); // wyświetlamy zawartość wczytanego pliku, dostajemy obiekt buffer, dlatego musimy przekonwertować nasz obiekt
console.log(data.toString()); // konwertujemy nasz obiekt do typu 'string'

// uruchamiamy naszą aplikację: node c-readFileSync.js