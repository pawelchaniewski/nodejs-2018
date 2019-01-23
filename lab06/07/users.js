const http = require('./http');

async function createUser(user) {
    const response = await http.post('http://localhost:4800/users', user);
    return response.data;
}

async function getUser(userId) {
    const response = await http.get(`http://localhost:4800/users/${userId}`);
    return response.data;
}

async function updateUser(userId, user) {
    const response = await http.patch(`http://localhost:4800/users/${userId}`, user);
    return response.data;
}

async function deleteUser(userId) {
    const response = await http.delete(`http://localhost:4800/users/${userId}`);
    return response.data;
}

module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser
};