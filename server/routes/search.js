const express = require('express');
const router = express.Router();
const Room = require('../models').Room;

/* GET home page. */
router.get('/', async function(req, res, next) {
    const queryArea = req.query.area
    res.json(await Room.getAllTheCityRooms(queryArea))
})


module.exports = router;
