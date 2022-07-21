const Vote = require('../models/Vote.model');
const Post = require('../models/Post.model');

const addVote = async (req, res)=>{
    console.log(req.body)
    try {
        Vote.findOne({user: req.user._id, post_id: req.body.post_id}).then(async data=>{
            if(data && req.body.type){
                if(data.type === req.body.type){
                        res.status(201).json(data);
                }else{
                    await Vote.findByIdAndUpdate(data._id, {type: req.body.type})
                    if(req.body.type === 'down'){
                        await Post.findByIdAndUpdate(req.body.post_id,{
                            $push:{
                                down_votes: data._id
                            },
                            $pull:{
                                up_votes: data._id
                            }
                        });
                    }else{
                        await Post.findByIdAndUpdate(req.body.post_id,{
                            $push:{
                                up_votes: data._id
                            },
                            $pull:{
                                down_votes: data._id
                            }
                        });
                    }
                    res.status(201).json(data);
                }
            
            }else{
                Vote.create({
                    user: req.user._id,
                    post_id: req.body.post_id,
                    type: req.body.type ?? 'up'
                }).then(async data=>{
                    if(req.body.type === 'down'){
                        await Post.findByIdAndUpdate(req.body.post_id,{
                            $push:{
                                down_votes: data._id
                            }
                        });
                    }else{
                        await Post.findByIdAndUpdate(req.body.post_id,{
                            $push:{
                                up_votes: data._id
                            }
                        });
                    }
                    
                    res.status(201).json(data);
                })
                
            }
        })
       
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

const getAll = async (req, res)=>{
    try {
        Vote.find()
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
        Vote.findById(req.params.id).populate("user tutor")
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
        Vote.findByIdAndUpdate(req.params.id, {...req.body})
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
        Vote.findById(req.params.id).then(data=>{
            if(data.user.valueOf() === req.user._id){
                Vote.findByIdAndDelete(req.params.id)
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
    addVote,
    getAll,
    getById,
    updateById,
    deleteById
}