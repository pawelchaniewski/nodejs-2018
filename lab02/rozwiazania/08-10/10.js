const request = require('request');
const yargs = require('yargs');

const argv = yargs.argv;

const requestOptions = {
    headers: {
        'User-Agent': 'request'
    }
};

const url = 'https://api.github.com/users/' + argv.login;

request.get(url, requestOptions, function (error, response, body) {
    if (body) {
        console.log(body);
    }
});
