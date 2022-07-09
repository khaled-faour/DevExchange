const mongoose = require('mongoose');

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

module.exports = mongoose.model("Payment", paymentSchema);