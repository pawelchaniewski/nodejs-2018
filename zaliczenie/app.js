const yargs = require("yargs");
const apiCommands = require("./api.commands");

apiCommands.forEach(command => yargs.command(command));
yargs.argv;
