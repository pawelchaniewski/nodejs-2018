const express = require('express');

const server = express();

function multi(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

// adres: http://localhost:4700/mnozenie?a=3&b=4
server.get('/mnozenie', (req, res) => {
    const { a, b } = req.query;
    const result = multi(a, b);
    res.send(`result: ${result}`);
});

// adres: http://localhost:4700/dzielenie?a=3&b=4
server.get('/dzielenie', (req, res) => {
    const { a, b } = req.query;
    const result = div(a, b);
    res.send(`result: ${result}`);
});

// adres: http://localhost:4700/dodawanie?a=3&b=4
server.get('/dodawanie', (req, res) => {
    const { a, b } = req.query;
    const result = add(+a, +b);
    res.send(`result: ${result}`);
});

// adres: http://localhost:4700/odejmowanie?a=3&b=4
server.get('/odejmowanie', (req, res) => {
    const { a, b } = req.query;
    const result = sub(a, b);
    res.send(`result: ${result}`);
});

server.listen(4700, () => {
    console.log('server started');
});