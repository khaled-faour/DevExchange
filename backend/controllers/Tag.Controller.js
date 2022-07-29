const Tag = require('../models/Tag.model');

const getAll = async (req, res)=>{
    try {
        Tag.find()
        .then(tagData=>{
            res.status(201).json(tagData);
        })
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}



module.exports ={
    getAll
}