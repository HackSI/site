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

/*
app.get('/volunteer', function (req, res) {
    res.redirect('https://docs.google.com/forms/d/1_V-AT64U3ZarmQE15I8Sm_gxxjzf6bY_kNaaewPDkyU/viewform');
});

app.get('/tracker', function (req, res) {
    res.redirect('https://docs.google.com/forms/d/1-E4vMbeFeurpaHFf1PjrQe2KBKeQodFTtKz7Fkuy4Tc/viewform');
});

app.get('/survey', function (req, res) {
    res.redirect('https://docs.google.com/forms/d/1D4OvQt1qRJkjp5LueuNknFj2L3Rzh4yl0jbD1qjwx_0/viewform');
});
*/

app.get('/facebook', function (req, res) {
    res.redirect('https://www.facebook.com/HackSouthernIllinois');
});

app.get('/google', function (req, res) {
    res.redirect('https://plus.google.com/communities/108109882393061170322');
});

app.get('/flickr', function (req, res) {
    res.redirect('http://www.flickr.com/groups/hacksi/');
});

/*
app.get('/lanyrd', function (req, res) {
    res.redirect('http://lanyrd.com/2013/hacksi/');
});
*/

app.get('/', function (req, res) {
    res.render('home', { title: 'home'});
});

app.get('/about', function (req, res) {
    res.render('about', { title: 'about'});
});

app.get('/sponsors', function (req, res) {
    res.render('sponsors', { title: 'sponsors'});
});

app.get('/sponsors/levels', function (req, res) {
    res.render('sponsors-levels', { title: 'sponsors'});
});

//Needs info updated
app.get('/sponsors/letter', function (req, res) {
    res.render('sponsor-letter', { title: 'sponsors'});
});

app.get('/sponsors/letter/print', function (req, res) {
    res.render('letter', { title: 'sponsors', layout: 'print'});
});

app.get('/timer', function (req, res) {
    var duration = req.query.duration || 120,
        min = req.query.minutes,
        sec = req.query.seconds;
    if (min || sec) {
        duration = 0;
        if (min) {
            duration = Number(min) * 60;
        }
        if (sec) {
            duration += Number(sec);
        }
    }
    res.render('timer', { title: 'timer', layout: 'timer', duration: duration});
});

app.get('/contact', function (req, res) {
    res.render('contact', { title: 'contact' });
});

app.get('/schedule', function (req, res) {
    res.render('schedule', { title: 'schedule' });
});

/*
app.get('/schedule/reid', function (req, res) {
    res.render('reid', { title: 'speaker: reid' });
});

app.get('/schedule/steve', function (req, res) {
    res.render('steve', { title: 'speaker: steve' });
});

app.get('/schedule/skyler', function (req, res) {
    res.render('skyler', { title: 'speaker: skyler' });
});

app.get('/schedule/ellen', function (req, res) {
    res.render('ellen', { title: 'speaker: ellen' });
});
*/

app.get('/live', function (req, res) {
    res.render('live', { title: 'live' });
});

app.get('/code', function (req, res) {
    res.render('code', { title: 'code of conduct' });
});

app.get('/press', function (req, res) {
    res.render('press', { title: 'press' });
});

app.get('*', function(req, res) {
    res.send(404, 'Not Found');
});


var port = process.env.PORT || 8900;
app.listen(port, function() {
    console.log('Launched server at', new Date());
    console.log('Server listening: http://127.0.0.1:' + port);
});

module.exports = app;
