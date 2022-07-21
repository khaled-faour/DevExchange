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
    }],
    comments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'comment',
        required: false
    }],
    tags: [{type: String, required: false}],
    up_votes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'vote',
        required: false,
    }],
    down_votes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'vote',
        required: false,
    }],
  
}, { timestamps: true });

module.exports = mongoose.model("post", postSchema);