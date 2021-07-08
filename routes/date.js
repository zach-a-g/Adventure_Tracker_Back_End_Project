`use strict`;

const express = require('express');
const router = express.Router();
const DateModel = require('../models/dateModel');

router.post('/add', async(req, res) => {
    const { itinerary_id, day, location, event } = req.body;
    const newDate = new DateModel(null, day, location, event);
    const response = await newDate.addDate();
    console.log('CREATE RESPONSE IS: ', response);
    res.redirect('/');

})

module.exports = router;