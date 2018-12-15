const fs = require('fs');

fs.readFile('user.json', function (error, data) {
    const user = JSON.parse(data);
    
    console.log('lastname:', user.lastname);
});
