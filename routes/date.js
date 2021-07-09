`use strict`;

const express = require('express');
const router = express.Router();
const DateModel = require('../models/dateModel');

router.post('/add', async(req, res) => {
    const { day, location, event, detail } = req.body;
    const user_id = req.session.user_id;
    const newDate = new DateModel(null, user_id, day, location, event, detail);
    const response = await newDate.addDate();
    console.log('CREATE RESPONSE IS: ', response);
    res.redirect('/info');

})

router.get('/:id?', async(req, res) => {
    const singleEvent = await DateModel.getSingleDate(req.params.id);
    res.render('template', {
        locals: {
            title: 'DETAILS',
            data: singleEvent,
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            body: 'partials/info'
        }
    })
})


module.exports = router;