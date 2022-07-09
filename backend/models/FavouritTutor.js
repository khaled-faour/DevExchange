const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate')

const favouriteTutorSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    tutor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
  
}, { timestamps: true });

userSchema.plugin(findOrCreate)
module.exports = mongoose.model("FavouriteTutor", favouriteTutorSchema);