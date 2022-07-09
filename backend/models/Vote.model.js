const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
    },
  
}, { timestamps: true });

module.exports = mongoose.model("vote", voteSchema);