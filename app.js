var express = require('express'),
    general = require('./lib/general.js'),
    app = express();

//General setup stuff
general(app);

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/register', function (req, res) {
    res.redirect('http://hacksi.eventbrite.com/');
});

app.get('/twitter', function (req, res) {
    res.redirect('http://twitter.com/hacksi');
});

app.get('/github', function (req, res) {
    res.redirect('https://github.com/HackSI');
});

app.get('/facebook', function (req, res) {
    res.redirect('https://www.facebook.com/HackSouthernIllinois');
});

app.get('/flickr', function (req, res) {
    res.redirect('http://www.flickr.com/groups/hacksi/');
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.get('/sponsors', function (req, res) {
    res.render('sponsors');
});

app.get('/contact', function (req, res) {
    res.render('contact');
});

app.get('*', function(req, res) {
    res.send(404, 'Not Found');
});


module.exports = app;
