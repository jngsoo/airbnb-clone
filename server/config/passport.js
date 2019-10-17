const passport = require('passport');
const NaverStrategy = require('passport-naver').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const secret = require('../secret');
const User = require('../models').User;

passport.use(new NaverStrategy({
    clientID: secret.naver_oauth_client_id,
    clientSecret: secret.naver_oauth_client_secret,
    callbackURL: secret.naver_oauth_callback_url
    },
    function(accessToken, refreshToken, profile, done) {
        console.log(profile)
        // search for attributes
        User.create({ 
            where: {user_id: +profile.id} })
            .then( ([user,created]) => {
            console.log(`${user.user_id}\n${created}\n${profile.name}`)
            return done()
        })
    }
));

passport.use(new GoogleStrategy({
    clientID: secret.google_oauth_client_id,
    clientSecret: secret.google_oauth_client_secret,
    callbackURL: secret.google_oauth_callback_url
  },
    function(accessToken, refreshToken, profile, done) {
    const userGoogleId = Number(profile.id)/10000
    console.log(userGoogleId)
    console.log(profile.displayName)
    User.findOrCreate({ 
        where: {user_id: userGoogleId},
        defaults: {
            name: profile.displayName
        }
    })
    .then( ([user, created]) => {
        console.log(user)
        console.log(created)
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