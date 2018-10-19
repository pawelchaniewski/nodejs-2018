console.log(process.argv);

const myCommand = process.argv[2];
console.log('my custom argument', myCommand);

if (myCommand === 'add') {
    console.log('adding numbers');
} else {
    console.log('command not found');
}