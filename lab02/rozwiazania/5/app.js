// pamiętajmy o zainstalowaniu zewnętrznego pakiety yargs: npm install yargs

const yargs = require('yargs');
const myMath = require('./my-math');

const argv = yargs.argv;

const operator = argv.operator;
const a = argv.a;
const b = argv.b;


console.log(argv);

if (operator === '*') {
    console.log(myMath.multiply(a, b));
} else {
    console.log(myMath.divide(a, b));
}