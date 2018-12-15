const fs = require('fs');

function callbackReadFile(error, data) {
    if (error) {
        console.log('błąd odczytu pliku');
    } else {
        const user = JSON.parse(data);
        console.log('lastname:', user.lastname);
    }
}

fs.readFile('user.json', callbackReadFile);

// dodatkowy przypadek od przetestowania:
fs.readFile('zlaNazwaPliku.json', callbackReadFile);
