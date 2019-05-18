const { MongoClient } = require('mongodb');

(async () => {
    try {
        const connectionString = 'mongodb://127.0.0.1:27017/apptodo';
        const client = await MongoClient.connect(connectionString, { useNewUrlParser: true });
        console.log('connected to database');
        client.close();
    } catch (error) {
        console.error(error);
    }
})();