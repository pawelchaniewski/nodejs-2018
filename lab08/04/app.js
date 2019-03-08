const express = require('express');
const server = express();

let users = [];

server.use(express.urlencoded());

server.param('id', (req, res, next, value) => {
    if (value) {
        req.params.id = parseInt(value);
    }
    next();
});

server.route('/user/:id?')
    .get((req, res) => {
        const { id } = req.params;
        const result = id ? users.find(user => user.id === id) : users;
        if (result) {
            res.send(result);
        } else {
            res.status(404).send();
        }
    })
    .post((req, res) => {
        const lastId = users.reduce((max, user) => max < user.id ? user.id : max, 0);
        const newUser = {
            id: lastId + 1,
            ...req.body
        };
        users.push(newUser);
        res.status(201).send(newUser);
    })
    .delete((req, res) => {
        const { id } = req.params;
        users = users.filter(user => user.id !== id);
        res.send();
    })
    .put((req, res) => {
        const { id } = req.params;
        const userIndex = users.findIndex(user => user.id === id);
        if (userIndex === -1) {
            return res.status(404).send();
        }
        const newUser = {
            id: id,
            ...req.body
        };
        users[userIndex] = newUser;
        res.status(201).send(newUser);
    });


server.listen(4000, () => console.log('start server'));