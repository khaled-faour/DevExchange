const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {type: String, required: false},
    content: {type: String, required: false},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    question_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts'
    },
  
}, { timestamps: true });

module.exports = mongoose.model("post", postSchema);