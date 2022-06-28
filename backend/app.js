require('dotenv').config();
require('./configs/db.config').connect()
const express = require('express');
const app = express();

app.use(express.json());

app.listen(4001, ()=>{
    console.log(`Server running on port 4001`);
})