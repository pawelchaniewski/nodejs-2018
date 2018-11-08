const os = require('os');

const userInfo = os.userInfo();

const userName = userInfo.username;

setTimeout(function () {
    console.log('hello', userName);
}, 5000);