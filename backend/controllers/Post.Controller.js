const Post = require('../models/Post.model');

const addPost = async (req, res)=>{
    try {
        Post.create({...req.body})
        .then(async data=>{
            if(req.body.question_id){
                const question = await Post.findById(req.body.question_id);
                question.answers.push(data.id)
                question.save()
            }
            res.status(201).json(data);
        })
       
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

const getAll = async (req, res)=>{
    try {
        Post.find()
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
        // Post.findById(req.params.id).populate("answers comments user")
        Post.findById(req.params.id)
        // populate user
        .populate({
            path: 'user',
            model: 'user',
        })
        // populate answers with nested user 

        .populate({
            path: 'answers',
            populate: {
                path: 'user',
            },
        })
        // populate answers with nested up votes and down votes
        .populate({
            path: 'answers',
            populate: {
                path: 'up_votes',
            },
        })
        .populate({
            path: 'answers',
            populate: {
                path: 'down_votes',
            },
        })
        // populate comments with nested user
        .populate({
            path: 'comments',
            populate: {
                path: 'user'
            },
            
        })
        .populate({
            path: 'up_votes',
            populate: {
                path: 'user'
            }
        }).
        populate({
            path: 'down_votes',
            populate: {
                path: 'user'
            }
        })
        .then(data=>{
            res.status(201).json(data);
        })
    
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

const getAllQuestions = async (req, res)=>{
    try {
        Post.find({question_id: {$eq: null}})
        .then(data=>{
            res.status(201).json(data);
        })
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

const getAllAnswers = async (req, res)=>{
    try {
        Post.find({question_id: {$ne: null}})
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
        Post.findByIdAndUpdate(req.params.id, {...req.body})
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
        Post.findByIdAndDelete(req.params.id)
        .then(async data=>{
            res.status(201).json(data);
        })
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}



module.exports ={
    addPost,
    getAll,
    getById,
    getAllQuestions,
    getAllAnswers,
    updateById,
    deleteById
}