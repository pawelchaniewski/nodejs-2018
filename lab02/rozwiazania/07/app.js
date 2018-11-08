const yargs = require('yargs');
const myMath = require('./my-math');

const argv = yargs.argv;

const operator = argv.operator;
const a = argv.a;
const b = argv.b;


console.log(argv);

if (operator === '*') {
    myMath.multiply(a, b, function (result) {
        console.log('result', result);
    });
} else {
    myMath.divide(a, b, function (result) {
        console.log('result', result);
    });
}