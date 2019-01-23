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

async function getUser(userId) {
    const response = await axios.get(`http://localhost:4800/users/${userId}`, axiosOptions);
    return response.data;
}

async function updateUser(userId, user) {
    const response = await axios.patch(`http://localhost:4800/users/${userId}`, user, axiosOptions);
    return response.data;
}

async function deleteUser(userId) {
    const response = await axios.delete(`http://localhost:4800/users/${userId}`, axiosOptions);
    return response.data;
}

module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser
};