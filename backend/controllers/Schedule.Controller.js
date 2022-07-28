const Schedule = require('../models/Schedule.model');
const OnholdCoins = require('../models/OnholdCoins.model');
const User = require("../models/User.model");

const addSchedule = async (req, res)=>{
    try {
        Schedule.create({...req.body, user: req.user._id})
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
        Schedule.find()
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
        Schedule.findById(req.params.id).populate("user")
        .then(data=>{
            res.status(201).json(data);
        })
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

const getUserSchedule = async (req, res)=>{
    try {
        Schedule.find({$or:[{user: req.user._id}, {tutor: req.user.tutor_details}]})
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
        Schedule.findByIdAndUpdate(req.params.id, {...req.body})
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

        Schedule.findById(req.params.id).then(async schedule=>{
            if(schedule.user.valueOf() == req.user._id || schedule.tutor.valueOd() == req.user._id){
                
                await Schedule.findByIdAndDelete(req.params.id)
                .then(async deletedSchedule=>{
                    await OnholdCoins.findOneAndDelete({schedule: req.params.id}).then(async holdCoins=>{
                        await User.findByIdAndUpdate(req.user._id, {$inc: {balance: holdCoins.amount}}).then(async user=>{
                            res.status(201).json(deletedSchedule);
                        })
                    })
                })
            }else{
                res.status(401).send("You are not authorized to delete this schedule");
            }
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}



module.exports ={
    addSchedule,
    getAll,
    getById,
    updateById,
    deleteById,
    getUserSchedule
}