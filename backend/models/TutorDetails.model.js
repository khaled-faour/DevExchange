const mongoose = require('mongoose');

const tutorDetailsSchema = new mongoose.Schema({
    hourly_rate: {Type: Number, required: true},
    description: {Type: String, required: true},
    tags: [{Type: String, ref: 'tag'}],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    github_url: {type: String},
    linkedin_url: {type: String}
}, { timestamps: true });

module.exports = mongoose.model("TutorDetails", tutorDetailsSchema);