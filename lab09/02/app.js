const express = require('express');
const app = express();

const authMiddleware = (req, res, next) => {
    if (req.headers['access-token'] === 'alamakota') {
        next();
    } else {
        res.status(401).send('bad password');
    }
};

app.use(authMiddleware);

app.get('/:id?', (req, res) => {
    console.log(req.params);
    res.send('hello');
});
app.get('/test', (req, res) => {
    res.send('test');
});

app.listen(4000, () => console.log('start server'));