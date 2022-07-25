const {Router} = require('express');
const userController = require('../controllers/User.Controller');
const router = Router();
const passport = require('passport');
const authMiddleware = require('../middlewares/auth.middleware');


// Testing Route
router.get("/", authMiddleware, (req, res)=>{
    res.json({user: req.user})
})

//Github Signin
router.get("/github", passport.authenticate('github', {scope: ['user:email']}))
router.get('/github/callback',passport.authenticate('github', { failureRedirect: '/auth/error' }),
function(req, res) {
  res.redirect(process.env.REDIRECT_URI)
});

//Gogole Signin
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/auth/error' }),
  function(req, res) {
    res.redirect(process.env.REDIRECT_URI);
  });


// Email and Password Signin
router.post("/login", passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
        res.send('Logged In');
    }
)

// Email and Password Signup
router.post("/register", userController.register)


// Logout
router.get('/logout', (req, res)=>{
    req.logout((err)=>{
        if(err) return next(err)
        res.redirect(process.env.REDIRECT_URI);
    })
})

module.exports = router;