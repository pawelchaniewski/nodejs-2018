// npm init
// npm install request

const request = require('request');
const { writeFile } = require('fs');

function getUser(id) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;

    return new Promise((resolve, reject) => {
        request(url, (error, response, body) => {
            if (error || response.statusCode !== 200) {
                reject('user not found');
            } else {
                resolve(JSON.parse(body));
            }
        });
    });
}

function getWeather(lat,lng) {
    const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;

    return new Promise((resolve, reject) => {
        request(url, (error, response, body) => {
            if (error || response.statusCode !== 200) {
                reject('weather not found');
            } else {
                resolve(JSON.parse(body));
            }
        });
    });
}

function saveToFile(obj) {
    const objToString = JSON.stringify(obj);
    new Promise((resolve, reject) => {
        writeFile('weather.json', objToString, error => {
            if (error) {
                reject(error);
            }
            resolve();
        });
    });
}

getUser(12)
    .then(user => {
        console.log(user.name);
        const { lat, lng } = user.address.geo;
        return getWeather(lat, lng);
    })
    .then(weather => {
        console.log(weather.main.temp);
        return weather;
    })
    .then(saveToFile)
    .catch(error => console.log(error));