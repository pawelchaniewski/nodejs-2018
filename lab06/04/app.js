const {
    getUser,
    createUser,
    updateUser,
    deleteUser
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

        const deleteResult = await deleteUser(id);
        console.log(deleteResult);

    } catch (error) {
        console.log(error.message);
    }
})();