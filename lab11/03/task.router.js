const express = require('express');
const Task = require('./task.model');
const router = express.Router();

// pamiętamy o użyciu middleware który przeparsuje nam wysłaną zawartość metodą POST/PUT do property body 
router.use(express.json());

// http://localhost:4000/tasks
router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.send(tasks);
});

// http://localhost:4000/tasks/some_id_abcd
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findById(id);
        if (task) {
            res.send(task);
        } else {
            res.status(404).end();
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

// http://localhost:4000/tasks
router.post('/', async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(201).send(task);
    } catch (error) {
        res.status(500).send(error);
    }
});

// http://localhost:4000/tasks/some_id_abcd
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findById(id);
        Object.assign(task, req.body);
        await task.save();
        res.send(task);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;