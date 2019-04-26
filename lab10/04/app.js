const express = require('express');
const fs = require('fs');
const { join } = require('path');
const app = express();

const errorMiddleware = (error, req, res, next) => {
    console.log('error message', error.message);
    // res.send(error.message); // aby zakończyć żądanie
    throw error; // lub next(error); aby przekazać błąd dalej
};


// http://localhost:4000/music.txt
// http://localhost:4000/someOtherFile.txt
// http://localhost:4000/sample.txt
app.get('/:filename', (req, res, next) => {
    const { filename } = req.params;
    const path = join(__dirname, filename);

    fs.readFile(path, 'utf-8', (error, data) => {
        if (error) { 
            next(error);
        } else {
            res.send(data);
        }
    });
});

app.use(errorMiddleware);

app.listen(4000, () => console.log('start server'));
