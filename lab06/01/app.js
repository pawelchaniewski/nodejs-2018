// npm init
// npm install axios

const axios = require('axios');

const axiosOptions = {
    headers: {
        'Content-Type': 'application/json'
    }
};

async function createUser(user) {
    const response = await axios.post('http://localhost:4800/users', user, axiosOptions);
    return response.data;
}

// IIFE
(async function () {
    try {
        const user = {
            name: 'Jan Nowak',
            username: 'janek',
            email: 'janek@nowak.abc'
        };

        const result = await createUser(user);
        console.log('user id:', result.id);
    } catch (error) {
        console.log(error.message);
    }
})();