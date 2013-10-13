var express = require('express'),
    general = require('./lib/general.js'),
    app = express();

//General setup stuff
general(app);

app.get('/register', function (req, res) {
    res.redirect('http://hacksi.eventbrite.com/');
});

app.get('/twitter', function (req, res) {
    res.redirect('http://twitter.com/hacksi');
});

app.get('/github', function (req, res) {
    res.redirect('https://github.com/HackSI');
});

app.get('/volunteer', function (req, res) {
    res.redirect('https://docs.google.com/forms/d/1_V-AT64U3ZarmQE15I8Sm_gxxjzf6bY_kNaaewPDkyU/viewform');
});

app.get('/tracker', function (req, res) {
    res.redirect('https://docs.google.com/forms/d/1-E4vMbeFeurpaHFf1PjrQe2KBKeQodFTtKz7Fkuy4Tc/viewform');
});

app.get('/survey', function (req, res) {
    res.redirect('https://docs.google.com/forms/d/1D4OvQt1qRJkjp5LueuNknFj2L3Rzh4yl0jbD1qjwx_0/viewform');
});

app.get('/facebook', function (req, res) {
    res.redirect('https://www.facebook.com/HackSouthernIllinois');
});

app.get('/flickr', function (req, res) {
    res.redirect('http://www.flickr.com/groups/hacksi/');
});

app.get('/lanyrd', function (req, res) {
    res.redirect('http://lanyrd.com/2013/hacksi/');
});

app.get('/', function (req, res) {
    res.render('home', { title: 'home'});
});

app.get('/about', function (req, res) {
    res.render('about', { title: 'about'});
});

app.get('/sponsors', function (req, res) {
    res.render('sponsors', { title: 'sponsors'});
});

app.get('/contact', function (req, res) {
    res.render('contact', { title: 'contact' });
});

app.get('/schedule', function (req, res) {
    res.render('schedule', { title: 'schedule' });
});

app.get('/live', function (req, res) {
    res.render('live', { title: 'live' });
});

app.get('*', function(req, res) {
    res.send(404, 'Not Found');
});


module.exports = app;
