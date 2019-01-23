const {
    getUser,
    createUser,
    updateUser
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

        const updateResult = await updateUser(id, { name: 'Jan Kowalski' });
        console.log(updateResult.name)

    } catch (error) {
        console.log(error.message);
    }
})();