`use strict`;

const express = require('express');
const router = express.Router();
const ItineraryModel = require('../models/itineraryModel');

router.get('/itinerary-form', async(req, res) => {
    res.render('template', {
        locals: {
            title: 'Plan out your day!',
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            body: 'partials/itinerary-form'
        }
    })
});

module.exports = router;