const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate')

const transactionSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    amount: {type: Number, required: false}
}, { timestamps: true });

userSchema.plugin(findOrCreate)
module.exports = mongoose.model("transaction", transactionSchema);