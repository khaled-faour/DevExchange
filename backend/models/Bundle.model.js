const mongoose = require('mongoose');

const bundleSchema = new mongoose.Schema({
    price: {type: Number, required: false},
    amount: {type: Number, required: false},
    image: {type: String, required: false},
}, { timestamps: true });

module.exports = mongoose.model("bundle", bundleSchema);