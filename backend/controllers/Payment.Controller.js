const Payment = require('../models/Payment.model');
const User = require('../models/User.model');
const addPayment = async (req, res)=>{
    try {
        Payment.create({...req.body, user: req.user._id})
        .then(async data=>{
            data.populate("bundle").then(async data=>{
                User.findByIdAndUpdate(req.user._id, {
                    $inc:{
                        balance: data.bundle.amount
                    }
                }).then(async data=>{
                    const user = await User.findById(req.user._id);
                    req.logIn(user, (err)=>{
                        if(err){
                            console.log(err);
                            res.status(500).send(err);
                        }
                        res.end();
                    });
                })
            })
           
            // User.findByIdAndUpdate(req.user._id, {
            //     $inc: {balance: data.amount}
            // res.status(201).json(data);
        })
       
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

const getAll = async (req, res)=>{
    try {
        Payment.find()
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
        Payment.findById(req.params.id).populate("user tutor")
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
        Payment.findByIdAndUpdate(req.params.id, {...req.body})
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
        Payment.findById(req.params.id).then(data=>{
            if(data.user.valueOf() === req.user._id){
                Payment.findByIdAndDelete(req.params.id)
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
    addPayment,
    getAll,
    getById,
    updateById,
    deleteById
}