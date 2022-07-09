const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    tutor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    review: {type: String, required: false},
    rate: {type: Number, required: false},
  
}, { timestamps: true });

module.exports = mongoose.model("review", reviewSchema);