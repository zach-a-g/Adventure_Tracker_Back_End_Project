`use strict`;

const express = require('express');
const router = express.Router();
const PlansModel = require('../models/plansModel');

router.get('/plan-form', async(req, res) => {
    res.render('template', {
        locals: {
            title: 'Placeholder text',
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            body: 'partials/plan-form'
        }
    })
});

module.exports = router;