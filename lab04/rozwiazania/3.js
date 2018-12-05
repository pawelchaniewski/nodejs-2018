function sub(a, b) {
    return new Promise((resolve, reject) => {
        const mathResult = a - b;

        if (mathResult < 0) {
            reject('mniej niz 0');
        }
        resolve(mathResult);
    });
}


sub(2, 2)
    .then(
        result => {
            console.log(result);
        },
        error => {
            console.error(error)
        }
    );

// lub
sub(1, 3)
    .then(result => console.log(result))
    .catch(error => console.error(error));

// itp...