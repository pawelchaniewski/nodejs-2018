const axios = require('axios');

async function getUserName(id) {
    const response = await axios(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = response.data;
    return user.name;
}

(async function () {
    try {
        const usersPromise = [2, 3, 5, 7, 8, 10].map(id => getUserName(id));

        const users = await Promise.all(usersPromise);
        console.log(users);

    } catch (error) {
        console.error(error.message);
    }
})();