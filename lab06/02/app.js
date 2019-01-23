const {
    getUser,
    createUser
} = require('./users');

// IIFE
(async function () {
    try {
        const user = {
            name: 'Jan Nowak',
            username: 'janek',
            email: 'janek@nowak.abc'
        };

        const { id } = await createUser(user);
        console.log('user id:', id);

        const result = await getUser(id);
        console.log(result.name);
    } catch (error) {
        console.log(error.message);
    }
})();