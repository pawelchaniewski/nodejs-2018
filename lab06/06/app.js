const yargs = require('yargs');

const usersCommands = require('./users.commands');
const postsCommands = require('./posts.commands');

usersCommands.forEach(command => yargs.command(command));
postsCommands.forEach(command => yargs.command(command));

// init parsing args...
yargs.argv;