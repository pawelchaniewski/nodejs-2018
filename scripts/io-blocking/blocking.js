const { getMovieSync } = require('./fake.service');

const movie1 = getMovieSync('someId1999');
console.log('movie1:', movie1);

const movie2 = getMovieSync('someId007');
console.log('movie2', movie2);

console.log('some math', 2 + 5);