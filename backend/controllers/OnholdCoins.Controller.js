const OnholdCoins = require('../models/OnholdCoins.model');

const addOnholdCoins = async (req, res)=>{
    try {

        OnholdCoins.create({
            user: req.user._id,
            amount: req.body.amount
        })
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
        OnholdCoins.find()
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
        OnholdCoins.findById(req.params.id).populate("user")
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
        OnholdCoins.findByIdAndUpdate(req.params.id, {...req.body})
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
        OnholdCoins.findById(req.params.id).then(data=>{
           if(data.user.valueOf() === req.user._id){
                OnholdCoins.findByIdAndDelete(req.params.id)
                .then(async data=>{
                    res.status(201).json(data);
                })
           }else{
            res.status(200).send("Not Allowed")
           }

        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}



module.exports ={
    addOnholdCoins,
    getAll,
    getById,
    updateById,
    deleteById
}