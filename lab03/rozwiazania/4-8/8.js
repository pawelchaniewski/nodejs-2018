// npm init
// npm install request
// npm install yargs

const request = require('request');
const argv = require('yargs').argv;


function callbackWeather(error, response, body) {
    if (error) {
        console.log('błąd połączenia z adresem');
    } else if (response.statusCode !== 200) {
        console.log('nie znaleziono użytwkonika');
    } else {
        const weather = JSON.parse(body);
        console.log('temperature', weather.main.temp);
    }
}

function getWeather(lat, lng) {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`
    request(weatherUrl, callbackWeather);
}

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

        getWeather(lat, lng);
    }
}

function getUser(id) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    request(url, callbackUser);
}

getUser(argv.id);