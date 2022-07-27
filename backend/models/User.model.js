const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    provider_id: {type: String, required: false},
    provider: {type: String, required: false},
    first_name: {type: String, required: false},
    last_name: {type: String, required: false},
    email: {type: String, required: false},
    password: {type: String, required: false},
    profile_picture: {type: String, required: false},
    balance: {type: Number, default: 0, required: false},
    user_type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userType',
        default: "62c95e5b35fa2fa2caf2421d"
    },
    github_url: {type: String, required: false},
    linkedin_url: {type: String, required: false},
    bio: {type: String, required: false},
    is_tutor : {type: Boolean, default: false, required: false},
    tutor_details: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TutorDetails',
        required: false
    }
}, { timestamps: true });

module.exports = mongoose.model("user", userSchema);