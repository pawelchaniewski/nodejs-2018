const { getMovieAsync } = require('./fake.service');

getMovieAsync('someId1999', (movie1) => {
    console.log('movie1:', movie1);
});

getMovieAsync('someId007', (movie2) => {
    console.log('movie2', movie2);
});

console.log('some math', 2 + 5);