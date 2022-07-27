const User = require("../models/User.model");
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

module.exports = {
    register,
    getById,
    getUserProfile,
    updateById
}