// npm init
// npm install request

const request = require('request');

const url = 'https://jsonplaceholder.typicode.com/users/2';

function callbackRequest(error, response, body) {
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

request(url, callbackRequest);