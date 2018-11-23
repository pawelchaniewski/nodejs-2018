// npm init
// npm install request
// npm install yargs

const request = require('request');
const argv = require('yargs').argv;

const url = `https://jsonplaceholder.typicode.com/users/${argv.id}`;

function callbackUser(error, response, body) {
    if (error) {
        console.log('błąd połączenia z adresem');
    } else if (response.statusCode !== 200) {
        console.log('nie znaleziono użytwkonika');
    } else {
        const user = JSON.parse(body);

        console.log('name:', user.name);
        console.log('lat:', user.address.geo.lat);
        console.log('lng:', user.address.geo.lng);
    }
}

request(url, callbackUser);