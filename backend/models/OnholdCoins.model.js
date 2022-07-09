const mongoose = require('mongoose');

const onholdCoinsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    amount: {type: Number, required: false}
}, { timestamps: true });

module.exports = mongoose.model("onholdcoins", onholdCoinsSchema);