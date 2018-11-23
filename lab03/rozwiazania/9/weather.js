const request = require('request');

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

module.exports = {
    getWeather,
};