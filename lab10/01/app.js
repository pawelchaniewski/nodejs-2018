const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/:name?', (req, res) => {
    const { name } = req.params;
    const header = `hello ${name || 'world'}!`;
    res.render('home', { header });
});

app.listen(4000, () => console.log('start server'));
