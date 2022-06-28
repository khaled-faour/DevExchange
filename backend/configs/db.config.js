const mongoose = require('mongoose');

const {MONGO_URI} = process.env;

exports.connect = ()=>{
    mongoose.connect(MONGO_URI)
    .then(()=>{
        console.log("Successfully connected to database");
    })
    .catch(()=>{
        console.log("Database connection failed. Exiting now");
        process.exit(1);
    })
}