const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    Start: {
        type: Date,
        required: [true, 'Start time is required']
    },
    End: {
        type: Date,
        required: [true, 'End time is required']
    },
    Title: {
        type: String,
        required: [true, 'Title is required']
    },
    users: {
        type: Array,
        min: [1, 'Must be at least 1'],
        required: true
    }
}, {timeStamp: true})

module.exports = mongoose.model('Event', eventSchema)