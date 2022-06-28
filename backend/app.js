require('dotenv').config();
require('./configs/db.config').connect()
const cookieSession = require('express-session')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const passport = require('passport')
require('./configs/passport.config')
const express = require('express');
const app = express();

app.use(express.json());

app.use(cookieParser(process.env.SESSION_KEY));
app.use(cookieSession({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
}))
app.use(passport.initialize());
app.use(passport.session());


// Routes
const authRouter = require('./routes/auth');
app.use('/api/auth', authRouter);

app.listen(4001, ()=>{
    console.log(`Server running on port 4001`);
})