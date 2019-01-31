const {
    createAlbum,
    getAlbum,
    updateAlbum,
    deleteAlbum
} = require('./albums');

const {
    getUser
} = require('./users');

const createCommand = {
    command: 'add:album',
    describe: 'Add new album',
    handler: async args => {
        try {
            const user = await getUser(args.userId);
            const album = {
                userId: user.id,
                title: args.title
            }
            const result = await createAlbum(album);
            console.log('album id:', result.id);
        } catch (error) {
            console.log(error.message);
        }
    }
};

const deleteCommand = {
    command: 'delete:album',
    describe: 'Delete album',
    handler: async args => {
        try {
            await deleteAlbum(args.id);
            console.log('album was deleted');
        } catch (error) {
            console.log(error.message);
        }
    }
};

const getCommand = {
    command: 'get:album',
    describe: 'Get album data',
    handler: async args => {
        try {
            const result = await getAlbum(args.id);
            console.log(result.title);
        } catch (error) {
            console.log(error.message);
        }
    }
};

module.exports = [getCommand, createCommand, deleteCommand];