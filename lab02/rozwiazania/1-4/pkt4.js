const _ = require('lodash');

const tab = [3, 5, -20, -1002, 234, 542, 6, 23, -3, 8]

const min = _.min(tab);
const max = _.max(tab);

console.log(tab);

console.log('min', min);
console.log('max', max);