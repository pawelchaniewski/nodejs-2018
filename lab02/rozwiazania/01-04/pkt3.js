const _ = require('lodash');

const tabA = ['ala', 'ma', 'kota'];
const tabB = ['ala', 'ma', 'psa'];

console.log(tabA);
console.log(tabB);

const example1 = _.xor(tabA, tabB);
console.log('przyklad z uzyciem xor', example1);

// lub 
const diffTabA = _.difference(tabA, tabB);
const diffTabB = _.difference(tabB, tabA);
const example2 = diffTabA.concat(diffTabB);
console.log('przyklad z uzyciem difference', example2);

