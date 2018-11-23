// npm init
// npm install yargs

const fs = require('fs');
const argv = require('yargs').argv;

const user = {
    name: argv.name,
    lastname: argv.lastname
};

const userString = JSON.stringify(user);

fs.writeFile('user.json', userString, function (error) {
    if (error) {
        console.log('błąd zapisu do pliku');
    }
});
