async function add(a, b) {
    const result = a + b;
    if (result % 2 === 0) {
        throw new Error('result of adding is even');
    }
    return result;
}

add(2, 7)
    .then(result => {
        console.log('result', result);
    })
    .catch(error => {
        console.log(error.message);
    })


add(3, 3)
    .then(result => {
        console.log('result', result);
    })
    .catch(error => {
        console.log(error.message);
    })