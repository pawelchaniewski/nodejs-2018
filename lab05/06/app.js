const axios = require('axios');


(async function () {
    const response = await axios('https://jsonplaceholder.typicode.com/users/2');
    const user = response.data;
    console.log(user.name);
})();