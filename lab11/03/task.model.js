const mongoose = require('mongoose');

module.exports = mongoose.model('Task', {
    label: String,
    completed: {
        type: Boolean,
        default: false,
    },
});
