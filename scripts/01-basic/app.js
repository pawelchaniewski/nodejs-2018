console.log('starting app');

const fs = require('fs');
const os = require('os');

const userInfo = os.userInfo();

console.log(userInfo);

fs.appendFile('test.txt', userInfo.username, () => { });

console.log('end app')