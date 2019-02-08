const express = require('express');

const router = express.Router();

let posts = [{
    id: 1,
    userId: 0,
    title: 'ala ma kota',
    body: 'abc'
}]

// adres: http://localhost:4700/getPosts
// adres: http://localhost:4700/getPosts?id=1
router.get('/getPosts', (req, res) => {
    const { id } = req.query;
    const result = id ? posts.find(i => i.id === +id) : posts;
    res.send(result);
});

// adres: http://localhost:4700/addPost?title=abc&body=ala+ma+kota
router.get('/addPost', (req, res) => {
    const post = {
        id: posts.reduce((maxId, next) => maxId < next.id ? next.id : maxId, 0) + 1,
        ...req.query
    };
    posts.push(post);

    res.send(posts);
});

// adres: http://localhost:4700/deletePost?id=1
router.get('/deletePost', (req, res) => {
    const id = parseInt(req.query.id);
    posts = posts.filter(i => i.id !== id);

    res.send(posts);
});

module.exports = router;