`use strict`;

const express = require('express');
const router = express.Router();
const LocationModel = require('../models/locationModel');

router.post('/add', async(req, res) => {
    const {location_name, location_img, location_description } = req.body;
    const newLocation = new LocationModel(null, location_name, location_img, location_description);
    const response = await newLocation.addLocation();
    console.log('CREATE RESPONSE IS: ', response);
    res.redirect('/');

})

module.exports = router;