const passport = require('passport');
const NaverStrategy = require('passport-naver').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models').User;
require('dotenv').config();

passport.use(new NaverStrategy({
    clientID: process.env.NAVER_OAUTH_CLIENT_ID,
    clientSecret: process.env.NAVER_OAUTH_CLIENT_SECRET,
    callbackURL: process.env.NAVER_OAUTH_CALLBACK_URL
    },
    function(accessToken, refreshToken, profile, done) {
        // console.log(profile)
        User.findOrCreate({ 
            where: {user_id: profile.id},
            defaults: {
                name: profile.provider
            }
        })
        .then( ([user, created]) => {
            return done(null, user)
        })
    }
));

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_OAUTH_CLIENT_ID,
    clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_OAUTH_CALLBACK_URL
  },
    function(accessToken, refreshToken, profile, done) {
        const userGoogleId = Number(profile.id)/10000
        User.findOrCreate({ 
            where: {user_id: userGoogleId},
            defaults: {
                name: profile.displayName
            }
        })
        .then( ([user, created]) => {
            return done(null, user)
        })
    }
));

passport.serializeUser(function(user, done) {
    done(null, user);   
});
  
passport.deserializeUser(function(id, done) {
    done(null, id)
});

module.exports = passport;