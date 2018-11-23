const request = require('request');
const weatherModule = require('./weather');

function callbackUser(error, response, body) {
    if (error) {
        console.log('błąd połączenia z adresem');
    } else if (response.statusCode !== 200) {
        console.log('nie znaleziono użytwkonika');
    } else {
        const user = JSON.parse(body);

        const lat = user.address.geo.lat;
        const lng = user.address.geo.lng;
        console.log('name:', user.name);
        console.log('lat:', lat);
        console.log('lng:', lng);

        weatherModule.getWeather(lat, lng);
    }
}

function getUser(id) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    request(url, callbackUser);
}

module.exports = {
    getUser,
};