const request = require('request');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Bialystok&APPID=0ed761300a2725ca778c07831ae64d6e';

request.get(url, function (error, response, body) {
    if (body) {
        console.log(body);
    }
});
