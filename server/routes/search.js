const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('../middleware/passport');
const User = require('../models').User;
const Room = require('../models').Room;

/* GET home page. */
router.get('/', async function(req, res, next) {
    // res.send(req.query)
    const queryArea = req.query.area
    res.json(await Room.getAllTheCityRooms(queryArea))
})


module.exports = router;
