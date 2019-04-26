const fs = require('fs');
const path = require('path')
const express = require('express');
const app = express();

const fileMiddleware = (req, res, next) => {
    const filePath = path.join(__dirname, req.originalUrl);
    if (fs.existsSync(filePath)) {
        console.log('file exist');
        res.sendFile(filePath);
    } else {
        next();
    }
}

app.use(fileMiddleware);
// app.use(express.static('./'));

app.get('/music.txt', (req, res) => {
    res.send('music !!!!!');
});

app.listen(4000, () => console.log('start server'));