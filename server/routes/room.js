const express = require('express');
const router = express.Router();
const jwt = require('../util/jwt');
const User = require('../models').User;
const Room = require('../models').Room;


/* GET home page. */
router.get('/', async function(req, res, next) {
    res.json(await Room.getAllRooms())
});


module.exports = router;
