function divide(a, b) {
    if (b === 0) {
        throw new Error('divide by 0!');
    }
    return a / b;
}


try {
    const resultA = divide(2, 2);
    console.log('resultA', resultA);

    const resultB = divide(2, 0);
    console.log('resultB', resultB);

    const resultC = divide(8, 3);
    console.log('resultC', resultC);
} catch (error) {
    console.log(error);
}
