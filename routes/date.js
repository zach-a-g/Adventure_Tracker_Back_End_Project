`use strict`;

const express = require('express');
const router = express.Router();
const DateModel = require('../models/dateModel');

router.post('/add', async(req, res) => {
    const {itinerary_id, day, location, event, detail } = req.body;
    // const user_id = req.session.user_id;
    const newDate = new DateModel(null, itinerary_id, day, location, event, detail);
    const response = await newDate.addDate();
    console.log('CREATE RESPONSE IS: ', response);
    res.redirect('/');

})

router.get('/:id?', async(req, res) => {
    const singleEvent = await DateModel.getSingleDate(req.params.id);
    const first_name = req.session.first_name
    res.render('template', {
        locals: {
            title: 'DETAILS',
            first_name,
            data: singleEvent,
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            body: 'partials/info'
        }
    })
})


module.exports = router;