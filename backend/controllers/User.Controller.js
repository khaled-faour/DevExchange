const User = require("../models/User.model");
const UserSession = require("../models/UserSession.model")
const bcrypt = require('bcryptjs');
const passport = require('passport');
const GithubStrategy= require("passport-github2").Strategy
const {COOKIE_KEY} = process.env;


module.exports = {
    register: async (req, res)=>{
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
    },

    // login: async (req, res)=>{
    //     try {
    //         User.findOne({email: req.body.email}).then(async (userData)=>{
    //             // 
    //             if(userData && (await bcrypt.compare(req.body.password, userData.password))){
    //                 let cookie = await bcrypt.hash(COOKIE_KEY, 10);
    //                 UserSession.create({
    //                     user: userData._id,
    //                     session: cookie
    //                 })
    //                 return res.cookie("devexchange", cookie).status(200).json({user: {
    //                     _id: userData._id,
    //                     first_name: userData.first_name,
    //                     last_name: userData.last_name,
    //                     email: userData.email
    //                 }})
    //             }
    //             return res.status(200).json({user:false, message: "Invalid Credentials"})
    //         })
    //     } catch (error) {
    //         console.log(error);
    //         res.status(500).send(error)
    //     }
    // },

    // logout: async (req, res )=>{
    //     res.clearCookie("devexchange").status(200);
    //     console.log(req.headers)
    //     const cookies = req.headers.cookie.split(";");
    //     let cookieValue= null;
    //     cookies.forEach(cookie=>{
    //         if(cookie.split("=")[0].trim() === "devexchange"){
    //             cookieValue = decodeURIComponent(cookie.split("=")[1].trim())
    //         }
    //     })

    //     const session = await UserSession.findOneAndRemove({session: cookieValue})
    //     .then(()=>{
    //         console.log("Session Cleared!");
    //         res.status(200).send("Session Cleared")
    //     }).catch(err=>{
    //         console.log(err)
    //     })
        
    // }

}