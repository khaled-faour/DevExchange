const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate')

const paymentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    bundle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'bundles'
    },
  
}, { timestamps: true });

userSchema.plugin(findOrCreate)
module.exports = mongoose.model("Payment", paymentSchema);