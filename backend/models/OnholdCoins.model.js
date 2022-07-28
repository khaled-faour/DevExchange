const mongoose = require('mongoose');

const onholdCoinsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    amount: {type: Number, required: false},
    schedule: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'schedule'
    },
}, { timestamps: true });

module.exports = mongoose.model("onholdcoins", onholdCoinsSchema);