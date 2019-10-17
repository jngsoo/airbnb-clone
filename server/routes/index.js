const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('../config/passport');
const User = require('../models').User;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('<h1>hello world</h1>')
})

router.get('/login', function(req, res, next) {
    res.send('THis is login page!')
})

router.get('/givemetoken', function(req, res, next) {
    const token = jwt.sign({ 
        user: 'bar' 
    }, 'shhhhh');
    res.cookie('toktoken',token);
    res.redirect('/mytoken')
})

router.get('/mytoken', function(req, res, next) {
    console.log(jwt.verify(req.cookies.toktoken, 'shhhhh'))
    res.send(`your cookies => ${JSON.stringify(req.cookies)}`)
})


module.exports = router;
