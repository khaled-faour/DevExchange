const mongoose = require('mongoose');

const userTypeSchema = new mongoose.Schema({
    _id: {type: Number, required: true},
    type: {type: String, required: true}
  
}, { timestamps: true });

module.exports = mongoose.model("userType", userTypeSchema);