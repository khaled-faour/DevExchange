const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    value: {type: String, required: false},
    label: {type: String, required: false},
});

module.exports = mongoose.model("tag", tagSchema);