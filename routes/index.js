`use strict`;

const express = require('express');
const router = express.Router();
const PlansModel = require('../models/plansModel');

router.get('/', async (req, res) => {
    let user_id;
    !!req.session.user_id
    ? (user_id = await PlansModel.getAllById(req.session.user_id))
    : (user_id = []);

    const thePlans = await PlansModel.getAll();
    res.render('template', {
        locals: {
            title: 'Placeholder text',
            user_id,
            plans: thePlans,
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            body: 'partials/home'
        }
    })
})

module.exports = router;