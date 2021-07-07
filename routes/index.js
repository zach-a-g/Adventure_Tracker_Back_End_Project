`use strict`;

const express = require('express');
const router = express.Router();
const PlansModel = require('../models/plansModel');

router.get('/', async(req, res) => {
    res.render('template', {
        locals: {
            title: 'Adventure Tracker | Home',
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            body: 'partials/home'
        }
    })
})

module.exports = router;