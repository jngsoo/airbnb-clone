const express = require('express');
const router = express.Router();
const User = require('../models').User;
const passport = require('../middleware/passport');
const jwt = require('jsonwebtoken');
const secret = require('../secret');

router.get('/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login']}));

router.get('/google/callback', passport.authenticate('google', {failureRedirect: '/login' }),
    function(req, res) {
        if(req.user) {
            const userInfo = req.user
            console.log(req.user)
            const token = jwt.sign({userId: userInfo.user_id,
                                    userName: userInfo.name,
                                    type: userInfo.type
                                    },
                                    secret.secretKey,
                                    {expiresIn: '2h'
                                    });
            res.cookie('user_info',token);
        }
    return res.redirect('/')
    }
);

router.get('/naver',passport.authenticate('naver', {failureRedirect: '/fail'}), );

router.get('/naver/callback', passport.authenticate('naver', {failureRedirect: 'login'}), 
    function(req, res, next) {
        if(req.user) {
            const userInfo = req.user
            console.log(req.user)
            const token = jwt.sign({userId: userInfo.user_id,
                                    userName: userInfo.name,
                                    type: userInfo.type
                                    },
                                    secret.secretKey,
                                    {expiresIn: '2h'
                                    });
            res.cookie('user_info',token);
        }
    return res.redirect('/')
});

module.exports = router;

