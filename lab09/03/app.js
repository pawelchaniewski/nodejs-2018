const express = require('express');
const app = express();

// podczas wysyłania żądania powinniśmy pamiętać o poprawnym formacie JSON, np: { "say": "hello" }

const jsonParseMiddleware = (req, res, next) => {
    let body = '';
    req.on('data', data => body += data);
    req.on('end', () => {
        req.body = JSON.parse(body);
        next();
    });
};

app.use(jsonParseMiddleware);

app.post('/*', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.listen(4000, () => console.log('start server'));