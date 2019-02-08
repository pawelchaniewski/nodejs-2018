const express = require('express');

const server = express();

server.get('/', (req, res) => {
    const { name } = req.query;
    const welcomeMessage = name ? `hello ${name}!` : 'hello!';

    res.send(welcomeMessage);
});

server.listen(4700);