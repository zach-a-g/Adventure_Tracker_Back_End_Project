`use strict`;

const express = require('express');
const router = express.Router();
const ItineraryModel = require('../models/itineraryModel');
const DateModel = require('../models/dateModel');

router.get('/', async(req, res) => {
    const user_id = req.session.user_id;
    const theItinerary = await ItineraryModel.getItinerary(user_id);
    res.render('template', {
        locals: {
            title: 'Adventure Tracker | Home',
            user_id,
            data: theItinerary,
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            body: 'partials/home'
        }
    })
});

router.post('/delete', async (req, res) => {
    const { id, day, location, event, detail } = req.body;

    const user_id = req.session.user_id;
    const dateDelete = new DateModel(id, user_id, day, location, event, detail);
    const response = await dateDelete.deleteDate();
    console.log('DELETE RESPONSE IS: ', response);
    res.redirect('/');
})

module.exports = router;