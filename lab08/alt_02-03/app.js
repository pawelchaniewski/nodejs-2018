const express = require('express');
const app = express();

const tasks = [
    'kupic 6 jaj',
    'kupic mleko'
];
// http://localhost:4000/task
// http://localhost:4000/task/1

app.get('/task/:id?', (req, res) => {
    const { id } = req.params;
    if (id) {
        if (tasks[id]) {
            res.send(tasks[id]);
        } else {
            res.status(404).send();
        }
    } else {
        res.send(tasks);
    }
});

app.post('/task', (req, res) => {
    let body = '';
    req.on('data', (data) => {
        body += data;
    });
    req.on('end', () => {
        console.log(body);
        tasks.push(body);
        res.status(201).send(body);
    });
});

app.delete('/task/:id', (req, res) => {
    const { id } = req.params;
    tasks.splice(id, 1);
    res.send();
});

app.put('/task/:id', (req, res) => {
    const { id } = req.params;
    let body = '';

    req.on('data', (data)=> {
        body += data;
    });
    req.on('end', ()=> {
        tasks[id] = body;
        res.send(tasks);
    });
});

app.listen(4000, () => console.log('start server'));