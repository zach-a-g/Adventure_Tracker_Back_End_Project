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

// router.get('/:id?', async(req, res) => {
//     const singleEvent = await DateModel.getSingleDate(req.params.id);
//     res.render('template', {
//         locals: {
//             title: 'DETAILS',
//             data: singleEvent,
//             is_logged_in: req.session.is_logged_in
//         },
//         partials: {
//             body: 'partials/info'
//         }
//     })
// })

module.exports = router;