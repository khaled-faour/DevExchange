const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate')

const userSchema = new mongoose.Schema({
    provider_id: {type: String, required: false},
    provider: {type: String, required: false},
    first_name: {type: String, required: false},
    last_name: {type: String, required: false},
    email: {type: String, required: false},
    password: {type: String, required: false},

});

userSchema.plugin(findOrCreate)
module.exports = mongoose.model("user", userSchema);