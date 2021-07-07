`use strict`;

const express = require('express');
const router = express.Router();
const ActivityModel = require('../models/activityModel');

router.post('/add', async(req, res) => {
    const { activity_name, activity_img } = req.body;
    const newActivity = new ActivityModel(null, activity_name, activity_img);
    const response = await newActivity.addActivity();
    console.log('PLANS RESPONSE IS: ', response);
    res.redirect('/plan-form');
})

module.exports = router;