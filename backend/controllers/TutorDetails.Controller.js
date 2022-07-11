const TutorDetails = require('../models/TutorDetails.model');
const User = require('../models/User.model');

const addTutorDetails = async (req, res)=>{
    try {
        TutorDetails.create({...req.body})
        .then(async data=>{
            User.findByIdAndUpdate(req.body.user, {
                tutorDetails: data.id
            })
            res.status(201).json(data);
        })
       
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

const getAll = async (req, res)=>{
    try {
        TutorDetails.find()
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
        TutorDetails.findById(req.params.id).populate("user")
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
        TutorDetails.findByIdAndUpdate(req.params.id, {...req.body})
        .then(async data=>{
            const upadatedData = await TutorDetails.findById(req.params.id)
            res.status(201).json(upadatedData);
        })
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

const deleteById = async (req, res)=>{
    try {
        TutorDetails.findByIdAndDelete(req.params.id)
        .then(async data=>{
            res.status(201).json(data);
        })
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}



module.exports ={
    addTutorDetails,
    getAll,
    getById,
    updateById,
    deleteById
}