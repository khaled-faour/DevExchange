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
        const comment = await Comment.findById(req.params.id);
        console.log(comment.user._id);
        if(comment.user._id.valueOf() == req.user._id){
            comment.content = req.body.content;
            await comment.save();
            res.status(201).send("Comment updated successfully");
        }else{
            res.status(403).send("You are not authorized to update this comment");
        }
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