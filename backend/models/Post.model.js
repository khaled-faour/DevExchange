const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate')

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

userSchema.plugin(findOrCreate)
module.exports = mongoose.model("post", postSchema);