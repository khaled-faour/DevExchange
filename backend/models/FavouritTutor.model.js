const mongoose = require('mongoose');

const favouriteTutorSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    tutor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
  
}, { timestamps: true });

module.exports = mongoose.model("FavouriteTutor", favouriteTutorSchema);