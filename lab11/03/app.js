const express = require('express');
const dbMiddleware = require('./db.middleware');
const taskRouter = require('./task.router');

const app = express();
app.use(dbMiddleware);
app.use('/tasks', taskRouter);

app.listen(4000, () => console.log('start server'));