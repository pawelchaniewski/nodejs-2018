const request = require('request');
const fs = require('fs');

const requestOptions = {
    headers: {
        'User-Agent': 'request'
    }
};

request.get('https://api.github.com/users/piotar', requestOptions, function (error, response, body) {
    if (body) {
        fs.writeFile('git.txt', body, function (writeError){
            if (!writeError) {
                console.log('saved data')
            }
        });
    }
});
