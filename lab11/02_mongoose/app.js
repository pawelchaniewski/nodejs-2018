const mongoose = require('mongoose');
const Task = require('./task.model');

mongoose.connect('mongodb://localhost:27017/apptodo', { useNewUrlParser: true });

(async () => {

    const task = new Task({
        label: 'Kupić 5 jaj',
        isCompleted: false
    });

    // dodawanie nowego zadania do kolekcji 
    await task.save();

    // zmodyfikowanie zadania w kolekcji 
    task.label = 'kupic 2 banany';
    await task.save();

    // usunięcie zadania z kolekcji
    await task.delete();

})();