const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const mongoose = require('mongoose');

const keys = require('../config/keys.js');
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) =>{
  User.findById(id)
    .then(user => {
      done(null, user);
    });
});

passport.use(new GoogleStrategy({

  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'

}, (accessToken, refreshToken, profile, done) => {
  User.findOne({googleID: profile.id})
    .then((existingUser) => {
      //  existinUser is not null. Therefore, invoke the done method.
      if (existingUser) {
        console.log("User already exists");
        done(null, existingUser);
      } else {
        // existingUser is null. Therefore, consturct a new user and persist it to DB.
        console.log("adding new user")
        // consturct a new instance of the mongoose user object
        new User({googleID: profile.id})
          // invoke save method to persist user into the database
          .save()
          // but, lets not invoke the done method until the user has infact been saved
          .then(user => {
            done(null, user);
          });
      }
    });
}));
