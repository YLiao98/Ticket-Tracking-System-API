const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Ticket = new Schema({
    title: {
        type: String
    },
    author:{
        type: String
    },
    description: {
        type: String
    },
    type: {
        type: String
    },
    dueDate: {
        type: Date
    },
    assignedTo: {
        type: String
    },
    status: {
        type: String
    }


});

module.exports = mongoose.model('Ticket', Ticket);