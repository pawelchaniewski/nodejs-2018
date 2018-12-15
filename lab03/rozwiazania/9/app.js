// npm init
// npm install request
// npm install yargs

const argv = require('yargs').argv;

const userModule = require('./user');

userModule.getUser(argv.id);