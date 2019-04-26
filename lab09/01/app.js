const express = require('express');
const app = express();

const logMiddleware = (req, res, next) => {
    console.log(`${req.method} ${req.originalUrl} ${req.params}`);
    next();
}

app.use(logMiddleware);

app.get('/:id?', (req, res) => {
    console.log(req.params);
    res.send('hello');
});
app.get('/test', (req, res) => {
    res.send('test');
});

app.listen(4000, () => console.log('start server'));