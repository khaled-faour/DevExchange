const User = require("../models/User.model");
const TutorDetails = require("../models/TutorDetails.model");
const OnholCoins = require('../models/OnholdCoins.model');
const Schedule = require('../models/Schedule.model');
const bcrypt = require('bcryptjs');



const register = async (req, res)=>{
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        User.create({
            ...req.body,
            password: hashedPassword
        }).then(userData=>{
            res.status(201).json(userData)
        })
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

const getById = async (req, res)=>{
    try {
        User.findById(req.params.id)
        .then(data=>{
            res.status(201).json(data);
        })
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

const getUserProfile = async (req, res)=>{
    try {
        User.findById(req.user._id).populate("tutor_details")
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
        User.findByIdAndUpdate(req.params.id, {...req.body})
        .then(async data=>{
            const upadatedData = await User.findById(req.params.id)
            res.status(201).json(upadatedData);
        })
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

const bookSession = async (req, res)=>{
    try {
        if(req.user.balance >= req.body.tutor.hourly_rate){
            TutorDetails.findByIdAndUpdate(req.body.tutor._id,{
                $pull: {
                    availability: {_id: req.body.time.availableTimeslot.id}
                }
            }).then(async data=>{
                await data.update({
                    $push:{
                        availability:[
                            {start_time: req.body.time.splitTimeslot[0]?.startTime, end_time: req.body.time.splitTimeslot[0]?.endTime},
                            {start_time: req.body.time.splitTimeslot[1]?.startTime, end_time: req.body.time.splitTimeslot[1]?.endTime}
                        ]
                    }
                })
                await Schedule.create({
                    start_time: req.body.time.startTime,
                    end_time: req.body.time.splitTimeslot[1]?.startTime,
                    user: req.user._id,
                    tutor: req.body.tutor._id,
                })
                await User.findByIdAndUpdate(req.user._id, {
                    $inc:{
                        balance: -req.body.tutor.hourly_rate
                    },
                    
                })
                await OnholCoins.create({
                    user: req.user._id,
                    amount: req.body.tutor.hourly_rate,
                })
                res.status(201).json(data);
            });
        }else{
            res.status(400).send("You don't have enough balance");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

module.exports = {
    register,
    getById,
    getUserProfile,
    updateById,
    bookSession
}