const myPromise = new Promise((resolve, reject) => {
    resolve('hello world!');
});


myPromise
    .then(result => {
        console.log(result);
    });