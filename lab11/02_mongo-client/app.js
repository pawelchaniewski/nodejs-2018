const { MongoClient, ObjectId } = require('mongodb');

(async () => {
    const dbAddress = 'mongodb://127.0.0.1:27017/';
    const dbName = 'apptodo';
    const mongoOptions = { useNewUrlParser: true };
    const client = await MongoClient.connect(dbAddress, mongoOptions);

    const db = client.db(dbName);

    const task = {
        label: 'Kupić 5 jaj',
        isCompleted: false
    }

    // dodawanie nowego zadania do kolekcji 
    const insertResult = await db.collection('tasks').insertOne(task);
    console.log(task);


    // zmodyfikowanie zadania w kolekcji 
    await db.collection('tasks')
        .updateOne(
            { _id: ObjectId(task._id) },
            {
                $set: { label: 'kupic 2 banany' }
            }
        );


    // usunięcie zadania z kolekcji
    await db.collection('tasks').deleteOne({ _id: ObjectId(task._id) });

    client.close();
})();