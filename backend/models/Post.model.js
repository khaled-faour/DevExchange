const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {type: String, required: false},
    content: {type: String, required: false},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    question_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
    },
    answers:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
    }]
  
}, { timestamps: true });

module.exports = mongoose.model("post", postSchema);