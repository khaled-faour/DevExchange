const Comment = require('../models/Comment.model');
const Post = require('../models/Post.model');

const addComment = async (req, res)=>{
    try {
        Comment.create({...req.body, user: req.user._id})
        .then(async data=>{
            const createdData = await Comment.findById(data._id).populate("user");
            if(req.body.post_id){
                Post.findByIdAndUpdate(req.body.post_id,{
                    $push: {comments: data._id}
                }).then((post)=>{
                    res.status(201).json(createdData);
                });
            }
            
        })
       
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

const getAll = async (req, res)=>{
    try {
        Comment.find()
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
        Comment.findById(req.params.id).populate("answers")
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
        Comment.findByIdAndUpdate(req.params.id, {...req.body})
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
        Comment.findByIdAndDelete(req.params.id)
        .then(async data=>{
            res.status(201).json(data);
        })
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}



module.exports ={
    addComment,
    getAll,
    getById,
    updateById,
    deleteById
}