
const mongoose = require('mongoose');

const dataSchema = {
    title: String,
    description: String
}

const Data = mongoose.model('Data',dataSchema);

module.exports = Data;