const TIME = 3000;
const movies = {
    someId1999: {
        title: 'The Matrix',
        year: 1999,
    },
    someId007: {
        title: '007 James Bond, Goldfinger',
        year: 1964,
    },
};

function getMovieSync(key) {
    let time = new Date().getTime();
    while ((new Date().getTime() - time) < TIME) {
    }
    return movies[key];
}

function getMovieAsync(key, callback) {
    setTimeout(() => {
        callback(movies[key]);
    }, TIME);
}

module.exports = {
    getMovieSync,
    getMovieAsync,
};
