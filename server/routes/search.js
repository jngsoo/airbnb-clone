const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('../middleware/passport');
const User = require('../models').User;
const Room = require('../models').Room;

/* GET home page. */
router.get('/', function(req, res, next) {
    // res.send(req.query)
    const area = req.query.area
    console.log(area)
    Room.findAll({ where: { city: area } }).then(rooms => {
        res.json(rooms)
    })

})


module.exports = router;
