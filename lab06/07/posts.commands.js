const {
    createPost,
    getPost,
    updatepost,
    deletePost
} = require('./posts');

const {
    getUser
} = require('./users');

const createCommand = {
    command: 'add:post',
    describe: 'Add new post',
    handler: async args => {
        try {
            const user = await getUser(args.userId);
            const post = {
                userId: user.id,
                title: args.title,
                body: args.body
            }
            const result = await createPost(post);
            console.log('post id:', result.id);
        } catch (error) {
            console.log(error.message);
        }
    }
};

const deleteCommand = {
    command: 'delete:post',
    describe: 'Delete post',
    handler: async args => {
        try {
            await deletePost(args.id);
            console.log('post was deleted');
        } catch (error) {
            console.log(error.message);
        }
    }
};

const getCommand = {
    command: 'get:post',
    describe: 'Get post data',
    handler: async args => {
        try {
            const result = await getPost(args.id);
            console.log(result.title);
        } catch (error) {
            console.log(error.message);
        }
    }
};

module.exports = [getCommand, createCommand, deleteCommand];