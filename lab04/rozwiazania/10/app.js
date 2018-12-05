// npm init
// npm install axios

const axios = require('axios');
const { writeFile } = require('fs');
const { promisify } = require('util');

const writeFileAsync = promisify(writeFile);

function getUser(id) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    return axios(url)
        .then(response => response.data);
}

function getAlbumByUserId(id) {
    const url = `https://jsonplaceholder.typicode.com/albums?userId=${id}`;
    return axios(url)
        .then(response => response.data);
}

function getPhotosByAlbumId(id) {
    const url = `https://jsonplaceholder.typicode.com/photos?albumId=${id}`;
    return axios(url)
        .then(response => response.data);
}

getUser(6)
    .then(user => {
        console.log(user.name);
        return getAlbumByUserId(user.id);
    })
    .then(albums => {
        const [firstAlbum] = albums;
        console.log('albums count:', albums.length);
        console.log('title of first album:', firstAlbum.title);
        return getPhotosByAlbumId(firstAlbum.id);
    })
    .then(photos => {
        console.log('photos count:', photos.length);
        photos.forEach(photo => {
            console.log(photo.title);
        });
        return photos;
    })
    .then(photos => {
        const photosToString = JSON.stringify(photos);
        return writeFileAsync('photos.json', photosToString);
    })
    .catch(error => console.log(error.message));