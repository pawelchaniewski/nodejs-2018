const http = require('./http');

async function createPost(post) {
    const response = await http.post('http://localhost:4800/posts', post);
    return response.data;
}

async function getPost(postId) {
    const response = await http.get(`http://localhost:4800/posts/${postId}`);
    return response.data;
}

async function updatepost(postId, post) {
    const response = await http.patch(`http://localhost:4800/posts/${postId}`, post);
    return response.data;
}

async function deletePost(postId) {
    const response = await http.delete(`http://localhost:4800/posts/${postId}`);
    return response.data;
}

module.exports = {
    createPost,
    getPost,
    updatepost,
    deletePost
};