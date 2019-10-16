const express = require('express');
const router = express.Router();
const User = require('../models').User;

/* GET users listing. */
router.get('/', function(req, res, next) {
    User.findAll().then(users => {
        res.send(JSON.stringify(users, null, 4));
    });
});

module.exports = router;
