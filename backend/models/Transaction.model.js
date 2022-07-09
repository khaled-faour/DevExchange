const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    amount: {type: Number, required: false}
}, { timestamps: true });

module.exports = mongoose.model("transaction", transactionSchema);