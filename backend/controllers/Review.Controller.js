const Review = require('../models/Review.model');

const addReview = async (req, res)=>{
    try {
        Review.create({...req.body, user: req.user._id})
        .then(async data=>{
            res.status(201).json(data);
        })
       
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

const getAll = async (req, res)=>{
    try {
        Review.find()
        .then(data=>{
            res.status(201).json(data);
        })
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

const getById = async (req, res)=>{
    try {
        Review.findById(req.params.id).populate("user")
        .then(data=>{
            res.status(201).json(data);
        })
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}


const updateById = async (req, res)=>{
    try {
        Review.findByIdAndUpdate(req.params.id, {...req.body})
        .then(async data=>{
            const upadatedData = await Post.findById(req.params.id)
            res.status(201).json(upadatedData);
        })
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}


const deleteById = async (req, res)=>{
    try {
        Review.findById(req.params.id).then(data=>{
            if(data.user.valueOf() === req.user._id){
                Review.findByIdAndDelete(req.params.id)
                .then(async data=>{
                    res.status(201).json(data);
                })
            }
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}



module.exports ={
    addReview,
    getAll,
    getById,
    updateById,
    deleteById
}