// npm init
// npm install request

const request = require('request');

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

getUser(2)
    .then(user => console.log(user.name));

getUser(12)
    .then(user => console.log(user.name))
    .catch(error => console.log(error));

getUser(4)
    .then(user => console.log(user.name))
    .catch(error => console.log(error));