const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    bundle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'bundle'
    },
  
}, { timestamps: true });

module.exports = mongoose.model("Payment", paymentSchema);