const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate')

const userTypeSchema = new mongoose.Schema({
    type: {type: String, required: false}
  
}, { timestamps: true });

userSchema.plugin(findOrCreate)
module.exports = mongoose.model("userType", userTypeSchema);