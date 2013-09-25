var express = require('express'),
    exphbs  = require('express3-handlebars'),
    helmet = require('helmet'),
    combo = require('combohandler'),
    app = express();

helmet.defaults(app);

app.use(express['static']('./static'));
app.get('/combo', combo.combine({rootPath: './static'}), combo.respond);

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// development only
app.configure('development', function(){
    app.locals({
        development: true
    });
});

// production only
app.configure('production', function(){
    app.locals({
        development: false
    });
});

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
