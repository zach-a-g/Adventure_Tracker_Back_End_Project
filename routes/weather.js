const { response } = require('express');
const express = require('express');
const router = express.Router();
const Users = require('../models/usersModel');


router.get('/home', async (req,res) => {
    const { location } = req.body
    let weatherData

    !!req.session.user_id
        ? ( weatherData = await Users.getWeather(location))
        : (weatherData = []);
    res.render('template',{
        locals: {
            title: 'Today\'s Weather'
        }, 
        partials: {
            body: 'partials/home',
            weatherData
        }
    })

})