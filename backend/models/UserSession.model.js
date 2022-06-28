const mongoose = require('mongoose');

const userSessionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    session: {type: String}

});

module.exports = mongoose.model("usersession", userSessionSchema);