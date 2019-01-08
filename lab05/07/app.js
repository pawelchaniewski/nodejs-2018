const axios = require('axios');


(async function () {
    try {
        const response = await axios('https://jsonplaceholder.typicode.com/users/12'); // błędny id użytkownika
        const user = response.data;
        console.log(user.name);
    } catch (error) {
        console.error(error.message);
    }
})();