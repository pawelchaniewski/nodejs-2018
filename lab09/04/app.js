const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

const words = ['piwo', 'hazard', 'disco-polo', 'cukierki'];

app.use(bodyParser.text());

app.post('/comment', (req, res) => {
    const hasBadWord = words.some(word => req.body.includes(word));
    if (hasBadWord) {
        return res.status(400).send('comment has bad word');
    }
    fs.writeFileSync('./comment.txt', req.body);
    res.send('ok');
});

app.get('/comment', (req, res) => {
    const comment = fs.readFileSync('./comment.txt', 'utf-8');
    res.send(comment);
});

app.listen(4000, () => console.log('start server'));