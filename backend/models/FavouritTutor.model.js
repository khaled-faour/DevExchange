const mongoose = require('mongoose');

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

module.exports = mongoose.model("FavouriteTutor", favouriteTutorSchema);