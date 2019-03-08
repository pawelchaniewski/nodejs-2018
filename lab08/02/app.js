const express = require('express');
const server = express();

let tasks = [];

server.use(express.urlencoded());

server.get('/task/:id?', (req, res) => {
    const { id } = req.params;
    const result = id ? tasks.find(task => task.id === +id) : tasks;
    if (result) {
        res.send(result);
    } else {
        res.status(404).send();
    }
});

server.post('/task', (req, res) => {
    const lastId = tasks.reduce((max, task) => max < task.id ? task.id : max, 0);
    const newTask = {
        id: lastId + 1,
        ...req.body
    };
    tasks.push(newTask);
    res.status(201).send(newTask);
});

server.delete('/task/:id?', (req, res) => {
    const { id } = req.params;
    tasks = tasks.filter(task => task.id !== id);
    res.send();
});


server.listen(4000, () => console.log('start server'));