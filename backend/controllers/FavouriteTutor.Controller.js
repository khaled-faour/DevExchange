const mongoose = require('mongoose')
const FavouriteTutor = require('../models/FavouritTutor.model');
const User = require('../models/User.model');

const addFavouriteTutor = async (req, res)=>{
    try {
        FavouriteTutor.create({...req.body})
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
        FavouriteTutor.find()
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
        FavouriteTutor.findById(req.params.id).populate("user")
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
        FavouriteTutor.findByIdAndUpdate(req.params.id, {...req.body})
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
        FavouriteTutor.findById(req.params.id).then(data=>{
            const dataUser = data.user.valueOf();
            const bodyUser =  req.body.user;
            if(dataUser === bodyUser){
                FavouriteTutor.findByIdAndDelete(req.params.id)
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
    addFavouriteTutor,
    getAll,
    getById,
    updateById,
    deleteById
}