const express = require('express');
const router = express.Router();
const User = require('../models').User;
const jwt = require('jsonwebtoken')

/* GET home page. */
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
