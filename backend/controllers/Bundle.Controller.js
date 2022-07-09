const Bundle = require('../models/Bundle.model');

const addBundle = async (req, res)=>{
    try {
        Bundle.create({...req.body})
        .then(bundleData=>{
            res.status(201).json(bundleData);
        })
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

const getAll = async (req, res)=>{
    try {
        Bundle.find()
        .then(bundleData=>{
            res.status(201).json(bundleData);
        })
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

const getById = async (req, res)=>{
    try {
        Bundle.findById(req.params.id)
        .then(bundleData=>{
            res.status(201).json(bundleData);
        })
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

const updateById = async (req, res)=>{
    try {
        Bundle.findByIdAndUpdate(req.params.id, {...req.body})
        .then(async bundleData=>{
            const upadatedData = await Bundle.findById(req.params.id)
            res.status(201).json(upadatedData);
        })
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

const deleteById = async (req, res)=>{
    try {
        Bundle.findByIdAndDelete(req.params.id)
        .then(async bundleData=>{
            res.status(201).json(bundleData);
        })
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}



module.exports ={
    addBundle,
    getAll,
    getById,
    updateById,
    deleteById
}