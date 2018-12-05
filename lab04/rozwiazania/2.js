const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('hello world!');
    }, 5000);
});


myPromise
    .then(result => {
        console.log(result);
    });