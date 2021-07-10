`use strict`

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const session = require('express-session');
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const es6Renderer = require('express-es6-template-engine');

app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');

app.use(session({
    secret: 'get rad!',
    resave: false,
    saveUninitialized: false,
    is_logged_in: false
}));

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
})

const rootController = require('./routes/index');
const usersController = require('./routes/users');
const itineraryController = require('./routes/itinerary');
const dateController = require('./routes/date');

app.use(`/`, rootController);
app.use('/users', usersController);
app.use('/', itineraryController);
app.use('/info', dateController);