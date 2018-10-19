const userObject = {
    name: 'Jan'
};

const userString = JSON.stringify(userObject);
console.log(typeof userString);
console.log(userString);

const convertUserObject = JSON.parse(userString);
console.log(typeof convertUserObject);
console.log(convertUserObject);

const fs = require('fs');
fs.writeFile('user.txt', userString, (error) => {
    console.log('write error', error);
});

fs.readFile('user.txt', (error, data) => {
    console.log('read error', error);
    console.log(data.toString());
});