const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate')

const userTypeSchema = new mongoose.Schema({
    _id: {type: Number, required: true},
    type: {type: String, required: true}
  
}, { timestamps: true });

userSchema.plugin(findOrCreate)
module.exports = mongoose.model("userType", userTypeSchema);