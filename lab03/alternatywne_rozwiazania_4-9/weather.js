const request = require('request');

function getWeather(lat, lng, callback){
    const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
    request(url, (error, response, body) => {
        if (error || (response && response.statusCode !== 200)) {
            console.log('blad')
        } else {
            callback(JSON.parse(body));
        }
    })
}

module.exports = {
    getWeather
}