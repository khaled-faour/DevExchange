const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate')

const tutorDetailsSchema = new mongoose.Schema({
    hourly_rate: {Type: Number, required: true},
    description: {Type: String, required: true},
    tags: [{Type: String, ref: 'tags'}],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    github_url: {type: String},
    linkedin_url: {type: String}
}, { timestamps: true });

userSchema.plugin(findOrCreate)
module.exports = mongoose.model("TutorDetails", tutorDetailsSchema);