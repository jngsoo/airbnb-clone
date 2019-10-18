const express = require('express');
const router = express.Router();
const User = require('../models').User;
const passport = require('../middleware/passport');
const jwt = require('../util/jwt');

router.get('/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login']}));

router.get('/google/callback', passport.authenticate('google', {failureRedirect: '/login' }),
    function(req, res) {
        if(req.user) jwt.issueNewToken(req, res);
        return res.redirect('/')
    }
);

router.get('/naver',passport.authenticate('naver', {failureRedirect: '/fail'}), );

router.get('/naver/callback', passport.authenticate('naver', {failureRedirect: 'login'}), 
    function(req, res, next) {
        if(req.user) jwt.issueNewToken(req, res);
        return res.redirect('/')
});

module.exports = router;

