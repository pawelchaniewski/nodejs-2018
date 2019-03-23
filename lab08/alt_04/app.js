const express = require('express');
const app = express();

let users = [
    { id: 1, firstname: 'Jan', lastname: 'Nowak' },
    { id: 2, firstname: 'Adam', lastname: 'Mickiewicz' }
];

app.use(express.json());

app.route('/user/:id?')
    .post((req, res) => {
        const lastId = users.reduce((maxId, user) => maxId < user.id ? user.id : maxId, 0);
        const newUser = {
            id: lastId + 1,
            ...req.body
        };
        users.push(newUser);
        res.status(201).send(newUser);
    })
    .get((req, res) => {
        const {id} = req.params;
        
        if(!id) {
            res.send(users);
        } else {
            const user = users.find((u)=> u.id === Number(id));
            if(user) {
                res.send(user);
            } else {
                res.status(404).send();
            }
        }
    })
    .put((req, res) => {
        const {id} = req.params;
        const userIndex = users.findIndex(u => u.id === Number(id));
        if (userIndex > -1) {
            const newUser = {
                id: +id,
                ...req.body
            };
            users[userIndex] = newUser;
            res.send(newUser);
        } else {
            res.status(404).send();
        }
    })
    .delete((req, res) => {
        const {id} = req.params;
        users = users.filter(p => p.id !== Number(id));
        res.send(users);
    });

app.listen(4000, () => console.log('start server'));