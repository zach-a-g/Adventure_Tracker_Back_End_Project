const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const usersModel = require('../models/usersModel');


router.get('/signup', async(req, res) => {
    res.render('template', {
        locals: {
            title: 'Register Page',
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            body: 'partials/signup',
        },
    });

});

router.get('/login', async(req, res) => {
    res.render('template', {
        locals: {
            title: 'Log-In Page',
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            body: 'partials/login',
        }
    });

});

router.post('/signup', async(req, res) => {
    const { first_name, last_name, email, password } = req.body;

    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(password, salt);

    const response = await usersModel.addUser(first_name, last_name, email, hash);
    console.log("POST RESPONSE IS: ", response);
    console.log(req.body);
    if (response.id) {
        res.redirect('/users/login');
    } else {
        res.status(500).send("ERROR: Please try to submit the form again.");
    }
});

router.post('/login', async(req, res) => {
    const { email, password } = req.body;
    const user = new usersModel(null, null, null, email, password);
    const response = await user.login();

    // this refers to the session in the browser
    if (!!response.isValid) {
        const { isValid, user_id, first_name, last_name } = response;

        req.session.is_logged_in = isValid;
        req.session.user_id = user_id;
        req.session.first_name = first_name;
        req.session.last_name = last_name;

        res.redirect('/');
    } else {
        res.sendStatus(403);
    }

    router.get('/logout', (req, res) => {
        req.session.destroy();
        res.redirect('/');
    })

});

module.exports = router;