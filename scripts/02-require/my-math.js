console.log('starting my-file');

// console.log(module);

const myNumbers = [3, 4, 12, 1, 32, 25];

module.exports.lottoNumbers = myNumbers;
module.exports.add = (a, b) => {
    console.log('call add function');
    return 'return value';
    // return a + b;
}
