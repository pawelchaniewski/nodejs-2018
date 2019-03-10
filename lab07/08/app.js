const express = require('express');
const userRouter = require('./user.router');
const postRouter = require('./post.router');

const server = express();

server.use(userRouter);
server.use(postRouter);


server.listen(4700, () => {
    console.log('server started');
});