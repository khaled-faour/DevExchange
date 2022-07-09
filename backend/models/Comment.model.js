const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: {type: String, required: false},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
    }
}, { timestamps: true });

module.exports = mongoose.model("comment", commentSchema);