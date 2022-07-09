const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate')

const commentSchema = new mongoose.Schema({
    content: {type: String, required: false},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts'
    },
  
}, { timestamps: true });

userSchema.plugin(findOrCreate)
module.exports = mongoose.model("comment", commentSchema);