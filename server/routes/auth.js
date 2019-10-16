const express = require('express');
const router = express.Router();
const passport = require('passport');
const secret = require('../secret');
const User = require('../models').User;

const NaverStrategy = require('passport-naver').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

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

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(new GoogleStrategy({
    clientID: secret.google_oauth_client_id,
    clientSecret: secret.google_oauth_client_secret,
    callbackURL: secret.google_oauth_callback_url
  },
  function(accessToken, refreshToken, profile, done) {

        // User.findOrCreate({where: {user_id: profile.id} })
        // .then( ([user,created]) => {
        // console.log(`${user.user_id}\n${created}\n${profile.name}`)
        // return done(user)
        // })
    return done(null, profile)
  }
));

// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve
//   redirecting the user to google.com.  After authorization, Google
//   will redirect the user back to this application at /auth/google/callback
router.get('/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.send('login success!');
});

router.get('/naver',passport.authenticate('naver', {
        failureRedirect: '/fail'
}), function(req, res, next) {
    res.send('sandwich')
});

// creates an account if no account of the new user
router.get('/naver/callback', passport.authenticate('naver', {
    failureRedirect: '#!/auth/login'
}), function(req, res, next) {
    res.send('??')
});

module.exports = router;