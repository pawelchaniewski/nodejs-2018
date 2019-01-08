async function add(a, b) {
    const result = a + b;
    if (result % 2 === 0) {
        throw new Error('result of adding is even');
    }
    return result;
}


(async function () {
    try {
        const result = await add(2, 7);
        console.log('resultA', result);
    } catch (error) {
        console.log(error);
    }

    try {
        const result = await add(3, 3);
        console.log('resultB', result);
    } catch (error) {
        console.log(error);
    }
})();