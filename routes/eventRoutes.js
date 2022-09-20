const express = require('express');
const moment = require('moment');
const router = express.Router();
const Event = require('../models/Event')

router.post('/create-event', (req, res) => {
    const events = new Event(req.body)
    // const result = events.save((eve) => {
    //     return eve
    // })
    
    // res.send(result)
    console.log(req.body)

})

module.exports = router;