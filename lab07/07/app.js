const express = require('express');

const server = express();

let users = [{
    id: 1,
    name: 'Jan',
    username: 'janko',
    email: 'jan@nowak'
}];

let posts = [{
    id: 1,
    userId: 0,
    title: 'ala ma kota',
    body: 'abc'
}]

// adres: http://localhost:4700/getUsers
// adres: http://localhost:4700/getUsers?id=1
server.get('/getUsers', (req, res) => {
    const { id } = req.query;
    const result = id ? users.find(i => i.id === +id) : users;
    res.send(result);
});

// adres: http://localhost:4700/addUser?name=janek
server.get('/addUser', (req, res) => {
    const user = {
        id: users.reduce((maxId, next) => maxId < next.id ? next.id : maxId, 0) + 1,
        ...req.query
    };
    users.push(user);

    res.send(users);
});

// adres: http://localhost:4700/deleteUser?id=1
server.get('/deleteUser', (req, res) => {
    const id = parseInt(req.query.id);
    users = users.filter(i => i.id !== id);

    res.send(users);
});

// adres: http://localhost:4700/getPosts
// adres: http://localhost:4700/getPosts?id=1
server.get('/getPosts', (req, res) => {
    const { id } = req.query;
    const result = id ? posts.find(i => i.id === +id) : posts;
    res.send(result);
});

// adres: http://localhost:4700/addPost?title=abc&body=ala+ma+kota
server.get('/addPost', (req, res) => {
    const post = {
        id: posts.reduce((maxId, next) => maxId < next.id ? next.id : maxId, 0) + 1,
        ...req.query
    };
    posts.push(post);

    res.send(posts);
});

// adres: http://localhost:4700/deletePost?id=1
server.get('/deletePost', (req, res) => {
    const id = parseInt(req.query.id);
    posts = posts.filter(i => i.id !== id);

    res.send(posts);
});


server.listen(4700, () => {
    console.log('server started');
});