const express = require('express');

const server = express();

function multi(a, b) {
    return a * b;
}

// adres: http://localhost:4700/?a=3&b=4
server.get('/', (req, res) => {
    const { a, b } = req.query;
    const result = multi(a, b);

    res.send(`result: ${result}`);
});

server.listen(4700, () => {
    console.log('server started');
});