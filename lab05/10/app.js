const axios = require('axios');

async function getUser(id) {
    const response = await axios(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.data;
}

async function getPosts(userId) {
    const response = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    return response.data;
}

async function getComments(postId) {
    const response = await axios(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    return response.data;
}

(async function () {
    try {
        const user = await getUser(2);
        console.log(user.name);
        console.log(user.email);

        const posts = await getPosts(user.id);
        console.log('posts count:', posts.length);

        const commentsPromise = posts.map(post => getComments(post.id));
        const comments = await Promise.all(commentsPromise);

        commentsCount = comments.reduce((result, next) => result + next.length, 0);
        console.log('comments count:', commentsCount);

    } catch (error) {
        console.error(error.message);
    }
})();