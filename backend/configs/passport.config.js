const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const {GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET} = process.env;
const User = require('../models/User.model');
const bcrypt = require('bcryptjs');


passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new GitHubStrategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: `http://localhost:4001/api/auth/github/callback`
    },
    function(accessToken, refreshToken, profile, done) {
      console.log("email: ", profile._json.email);
      User.findOne({provider_id: profile.id, provider: profile.provider}, async (err, user)=>{
        if(err) return done(err);
        if(!user){
          try {
            const createdUser = await User.create({
              provider_id: profile.id,
              provider: profile.provider,
              first_name: profile.displayName.split(" ")[0],
              last_name: profile.displayName.split(" ")[1],
              profile_picture: profile.photos[0].value,
              email: profile.emails[0].value._json.email
            })
           return done(null, createdUser)
          } catch(error) {
            return done(error);
          }
          
        }
        return done(null, user);
      });
    }
));

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:4001/api/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOne({provider_id: profile.id, provider: profile.provider}, async (err, user)=>{
      if(err) return done(err);
      if(!user){
        try {
          const createdUser = await User.create({
            provider_id: profile.id,
            provider: profile.provider,
            first_name: profile.name.givenName,
            last_name: profile.name.familyName,
            profile_picture: profile.photos[0].value,
            email: profile.emails[0].value,
          })
          return done(null, createdUser)
        } catch (error) {
          return done(error)
        }
      }
      return done(null, user);
    });
  }
));

passport.use(new LocalStrategy({usernameField: "email", passwordField: "password"},
  function(username, password, done) {
    User.findOne({email: username, provider:{$eq: null}}, (err, user) => {
      console.log(user)
      if (err) {
        return done(err)
      }

      // User not found
      if (!user) {
        return done(null, false)
      }

      // Always use hashed passwords and fixed time comparison
      bcrypt.compare(password, user.password, (err, isValid) => {
        if (err) {
          return done(err)
        }
        if (!isValid) {
          return done(null, false)
        }
        return done(null, user)
      })
    })
  }
));