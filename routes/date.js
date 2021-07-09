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

module.exports = router;