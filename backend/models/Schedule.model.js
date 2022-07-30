const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    start_time: {type: Date, required: false},
    end_time: {type: Date, required: false},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    tutor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    meeting_id:{type: String, required: true},
  
}, { timestamps: true });

module.exports = mongoose.model("schedule", scheduleSchema);