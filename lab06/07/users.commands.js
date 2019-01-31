const {
    getUser,
    createUser,
    updateUser,
    deleteUser
} = require('./users');

const createCommand = {
    command: 'add:user',
    describe: 'Add new user',
    handler: async args => {
        const user = {
            name: args.name,
            username: args.username,
            email: args.email
        }
        const result = await createUser(user);
        console.log('user id:', result.id);
    }
};

const deleteCommand = {
    command: 'delete:user',
    describe: 'Delete user',
    handler: async args => {
        try {
            await deleteUser(args.id);
        } catch (error) {
            console.log(error.message);
        }
    }
};

const getCommand = {
    command: 'get:user',
    describe: 'Get user data',
    handler: async args => {
        try {
            const user = await getUser(args.id);
            console.log(user.name);
        } catch (error) {
            console.log(error.message);
        }
    }
};

module.exports = [getCommand, createCommand, deleteCommand];