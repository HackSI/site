var express = require('express'),
    exphbs  = require('express3-handlebars'),
    helmet = require('helmet'),
    app = express();

helmet.defaults(app);

app.use(express['static']('./static'));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/register', function (req, res) {
    res.redirect('http://hacksi.eventbrite.com/');
});

app.get('/twitter', function (req, res) {
    res.redirect('http://twitter.com/hacksi');
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
