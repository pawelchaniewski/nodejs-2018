async function myFuncHello() {
    return 'hello world!';
}



myFuncHello()
    .then(result => {
        console.log(result);
    });