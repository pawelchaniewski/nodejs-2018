const request = require('request');

function getUser(id, callback){
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    request(url, (error, response, body) => {
        if (error || (response && response.statusCode !== 200)) {
            console.log('blad')
        } else {
            const user = JSON.parse(body)
            callback(user);
        }
    })
}

module.exports = {
    getUser
}