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

const tutorDetailsRouter= require('./routes/tutorDetails');
app.use('/api/tutorDetails', authMiddleware, tutorDetailsRouter)

const favouriteTutorRouter= require('./routes/favouriteTutors');
app.use('/api/favouriteTutors', authMiddleware, favouriteTutorRouter)

const onholdCoinsRouter= require('./routes/onholdCoins');
app.use('/api/onholdCoins', authMiddleware, onholdCoinsRouter)

const reviewsRouter= require('./routes/reviews');
app.use('/api/reviews', authMiddleware, reviewsRouter)

const paymentsRouter= require('./routes/payments');
app.use('/api/payments', authMiddleware, paymentsRouter)

const transactionsRouter= require('./routes/transactions');
app.use('/api/transactions', authMiddleware, transactionsRouter)

const userTypesRouter= require('./routes/userTypes');
app.use('/api/userTypes', authMiddleware, userTypesRouter)

app.listen(4001, ()=>{
    console.log(`Server running on port 4001`);
})