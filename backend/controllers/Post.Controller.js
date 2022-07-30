const Post = require('../models/Post.model');
const User = require('../models/User.model');

const addPost = async (req, res)=>{
    try {
        if(req.user.balance >= 50){
            Post.create({...req.body, user: req.user._id})
            .then(async data=>{
                if(req.body.question_id){
                    const question = await Post.findById(req.body.question_id);
                    question.answers.push(data.id)
                    question.save()
                }else{
                    await User.findByIdAndUpdate(req.user._id,{
                        $inc:{
                            balance: -50
                        }
                    })
                }
                const updatedUser = await User.findById(req.user._id)
                req.logIn(updatedUser, (err)=>{
                    if(err){
                        console.log(err);
                        res.status(500).send(err);
                    }
                    res.status(201)
                    res.end()
                });
            })
        }else{
            res.status(405).send("Not enough balance")
        }
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
        Post.find({question_id: {$eq: null}}).populate("user", "profile_picture")
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
        const post = await Post.findById(req.params.id)
        if(post.user.valueOf() == req.user._id){
            console.log(req.body)
            post.content = req.body.content;
            await post.save()
            res.status(200).send("Post updated successfully")
        }else{
            console.log("Unauthorized")
            res.status(401).send("Unauthorized")
        }
        // .then(async data=>{
        //     if(data.user.valueOf() == req.user._id){
        //         Post.findByIdAndUpdate(req.params.id, req.body)
        //         .then(async data=>{
        //             res.status(201).json(data);
        //         })
        //     }else{
        //         res.status(405).send("You are not authorized to update this post")
        //     }
        // })
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