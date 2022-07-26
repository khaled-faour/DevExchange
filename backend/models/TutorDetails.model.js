const mongoose = require('mongoose');

const tutorDetailsSchema = new mongoose.Schema({
    title:{type: String, required: true},
    hourly_rate: {type: Number, required: true},
    description: {type: String, required: true},
    tags: [{type: String, ref: 'tag'}],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    github_url: {type: String, required: false},
    linkedin_url: {type: String, required: false},
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'review',
        required: false
    }],
    availability:[{
        start_time: {type: String, required: false},
        end_time: {type: String, required: false},
        start_date: {type: Date, required: false},
        end_date: {type: Date, required: false,},
        durations:[{type: Number, required: false}]
    }]
}, { timestamps: true });

module.exports = mongoose.model("TutorDetails", tutorDetailsSchema);