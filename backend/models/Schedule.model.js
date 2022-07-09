const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    start_time: {type: Date, required: false},
    end_time: {type: Date, required: false},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    tutor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
  
}, { timestamps: true });

module.exports = mongoose.model("schedule", scheduleSchema);