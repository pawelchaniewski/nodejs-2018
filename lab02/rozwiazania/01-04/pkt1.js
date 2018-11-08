// przed rozpoczęciem zadania musimy stworzyć package.json poleceniem: npm init 
// oraz zainstalować pakiet lodas: npm install lodash

const _ = require('lodash');

const tabA = ['ala', 3, 'ma', 'kota', 1, 'ala', 1, 4, 3];
const tabB = _.uniq(tabA);

console.log(tabA);
console.log(tabB);
