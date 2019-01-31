const http = require('./http');

async function createAlbum(album) {
    const response = await http.post('http://localhost:4800/albums', album);
    return response.data;
}

async function getAlbum(ablumId) {
    const response = await http.get(`http://localhost:4800/albums/${ablumId}`);
    return response.data;
}

async function updateAlbum(ablumId, album) {
    const response = await http.patch(`http://localhost:4800/albums/${ablumId}`, album);
    return response.data;
}

async function deleteAlbum(ablumId) {
    const response = await http.delete(`http://localhost:4800/albums/${ablumId}`);
    return response.data;
}

module.exports = {
    createAlbum,
    getAlbum,
    updateAlbum,
    deleteAlbum
};