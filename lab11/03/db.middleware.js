
const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/apptodo';

module.exports = async (req, res, next) => {
    // sprawdzamy czy jest już nawiązane połączenie z bazą ... jeżeli tak to pomijamy nowe połączenie
    if (!mongoose.connection.readyState) {
        await mongoose.connect(connectionString, { useNewUrlParser: true });
    }
    next();
};