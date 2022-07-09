require('dotenv').config();
require('./configs/db.config').connect()
const cookieSession = require('express-session')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const passport = require('passport')
require('./configs/passport.config')
const express = require('express');
const app = express();

// Auth Middleware
const authMiddleware = require('./middlewares/auth.middleware')

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

const bundlesRouter= require('./routes/bundles');
app.use('/api/bundles', authMiddleware, bundlesRouter)

const postsRouter= require('./routes/posts');
app.use('/api/posts', authMiddleware, postsRouter)

const commentsRouter= require('./routes/comments');
app.use('/api/comments', authMiddleware, commentsRouter)

app.listen(4001, ()=>{
    console.log(`Server running on port 4001`);
})