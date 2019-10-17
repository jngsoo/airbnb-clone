const express = require('express');
const router = express.Router();
const User = require('../models').User;
const passport = require('../config/passport');

router.get('/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login']}));

router.get('/google/callback', passport.authenticate('google', {failureRedirect: '/login' }),
    function(req, res) {
        // res.json(req.user);
        res.send(`Hi ${req.user.name} logged in`);

    }
);

router.get('/naver',passport.authenticate('naver', {
        failureRedirect: '/fail'
}), function(req, res, next) {
    res.send('sandwich')
});

router.get('/naver/callback', passport.authenticate('naver', {
    failureRedirect: '#!/auth/login'
}), function(req, res, next) {
    res.send('??')
});

module.exports = router;