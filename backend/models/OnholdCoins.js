const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate')

const onholdCoinsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    amount: {type: Number, required: false}
}, { timestamps: true });

userSchema.plugin(findOrCreate)
module.exports = mongoose.model("onholdcoins", onholdCoinsSchema);