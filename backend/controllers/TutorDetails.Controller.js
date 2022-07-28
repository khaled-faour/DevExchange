const TutorDetails = require('../models/TutorDetails.model');
const User = require('../models/User.model');
const Review = require('../models/Review.model');

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
        const tutorsArray = [];
        TutorDetails.find()
        .populate("user", "first_name last_name profile_picture") 
        .then(async data=>{
            for(const tutor of data){
                await Review.aggregate([
                    {$match: {_id: {$in: tutor.reviews}}},
                    {$group: {_id: "$tutor", average: {$avg: '$rate'}}}
                ]).then(data=>{
                    tutorsArray.push({...tutor._doc, average: data[0]?.average ?? 0});
                    tutorsArray
                }).catch(err=>{
                    console.log(err)
                })
            }
            res.status(200).json(tutorsArray);
        })
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

const getById = async (req, res)=>{
    try {
       TutorDetails.findById(req.params.id)
        .populate("user", "first_name last_name profile_picture github_url linkedin_url")
        .populate("reviews")
        .populate({
            path: "reviews",
            populate: {
                path: "user",
                select: "first_name last_name profile_picture"
            }
        })
        .then(async tutor=>{
            await Review.aggregate([
                {$match: {_id: {$in: tutor.reviews}}},
                {$group: {_id: "$tutor", average: {$avg: '$rate'}}}
            ]).then(data=>{
                res.status(200).json({...tutor._doc, average: data[0]?.average ?? 0});
            }).catch(err=>{
                console.log(err)
            })
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

const addTutorAvailability = async (req, res)=>{

    Date.prototype.addDays = function(days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    }
    
    function getDates(start, end) {
        console.log(start, end)
        const startDate = new Date(start)
        const stopDate = new Date(end)
        var dateArray = new Array();
        var currentDate = startDate;
        while (currentDate <= stopDate) {
            dateArray.push(new Date (currentDate));
            currentDate = currentDate.addDays(1);
        }
        return dateArray;
    }
    try {   
        const availability = req.body.newAvailability;
        const start_hours = availability.start_time.split(':')
        const end_hours = availability.end_time.split(':')
        console.log("Availability ", availability)

        const availableTimeslots = getDates(availability.start_date, availability.end_date)
        .map(date=>{
            const value ={
                start_time: new Date(new Date(new Date(date)).setHours(start_hours[0], start_hours[1], 0, 0)),
                end_time: new Date(new Date(new Date(date)).setHours(end_hours[0], end_hours[1], 0, 0)),
            }
            console.log("Value: ", value)
              return value
            })
            console.log("Timeslotes: ", availableTimeslots)
        TutorDetails.findByIdAndUpdate(req.user.tutor_details, {
            $push:{
                availability: availableTimeslots
            }
        })
        .then(async data=>{
            res.status(201).json(data);
        })
       
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

const deleteTutorAvailability = async (req, res)=>{
    try {
        console.log(req.body)
       TutorDetails.findByIdAndUpdate(req.user.tutor_details, {
            $pull:{
                availability: {_id: req.body.id}
            }
        })
        .then(async data=>{
            res.status(200).json(data);
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
    deleteById,
    addTutorAvailability,
    deleteTutorAvailability
}