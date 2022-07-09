const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts'
    },
  
}, { timestamps: true });

module.exports = mongoose.model("vote", voteSchema);