`use strict`;

const express = require('express');
const router = express.Router();
const ItineraryModel = require('../models/itineraryModel');
const DateModel = require('../models/dateModel');


router.get('/info', async(req, res) => {
    const user_id = req.session.user_id;
    const first_name = req.session.first_name;
    const theItinerary = await ItineraryModel.getItinerary(user_id);
    res.render('template', {
        locals: {
            title: 'Check out your Itinerary!',
            user_id,
            first_name,
            data: theItinerary,
            is_logged_in:req.session.is_logged_in
        },
        partials: {
            body: 'partials/info'
        }
    })
})


router.get('/date-form', async(req, res) => {
    const user_id = req.session.user_id;
    const first_name = req.session.first_name;
    const allItineraries = await ItineraryModel.getAllItinerariesById(user_id);
    res.render('template', {
        locals: {
            title: 'Plan out your day!',
            first_name,
            user_id,
            data: allItineraries,
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            body: 'partials/date-form'
        }
    })
});

router.get('/itinerary-form', async(req, res) => {
    const user_id = req.session.user_id;
    const first_name = req.session.first_name;
    const theItinerary = await ItineraryModel.getItinerary(user_id);
    console.log('THE ITINERARY: ', theItinerary);
    res.render('template', {
        locals: {
            title: 'Create your Itinerary!',
            user_id,
            first_name,
            data: theItinerary,
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            body: 'partials/itinerary-form'
        }
    })
});

router.post('/add', async(req, res) => {
    const { title } = req.body;
    const user_id = req.session.user_id;
    const newItinerary = new ItineraryModel(null, title, user_id);
    const response = await newItinerary.addItinerary();
    console.log('CREATE RESPONSE IS: ', response);
    res.redirect('/date-form');
});

module.exports = router;