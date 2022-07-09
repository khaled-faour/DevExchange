const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate')

const bundleSchema = new mongoose.Schema({
    price: {type: Number, required: false},
    amount: {type: Number, required: false},
    image: {type: String, required: false},
}, { timestamps: true });

userSchema.plugin(findOrCreate)
module.exports = mongoose.model("bundle", bundleSchema);