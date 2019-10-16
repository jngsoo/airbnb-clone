const express = require('express');
const router = express.Router();
const passport = require('passport');
const secret = require('../secret');
const User = require('../models').User;

const NaverStrategy = require('passport-naver').Strategy;

passport.use(new NaverStrategy({
        clientID: secret.naver_oauth_client_id,
        clientSecret: secret.naver_oauth_client_secret,
        callbackURL: secret.naver_oauth_callback_url
    },
    function(accessToken, refreshToken, profile, done) {
        console.log(profile)
        // search for attributes
        User.findOrCreate({ 
            where: {user_id: profile.id} })
            .then( ([user,created]) => {
            console.log(`${user.user_id}\n${created}\n${profile.name}`)
        })
    }
));

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