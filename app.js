var express = require('express'),
    exphbs  = require('express3-handlebars'),
    helmet = require('helmet'),
    app = express();

helmet.defaults(app);

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/rsvp', function (req, res) {
    res.render('home');
});

app.get('/about', function (req, res) {
    res.render('home');
});

app.get('/register', function (req, res) {
    res.render('home');
});

app.listen(8900);
console.log('Server started http://127.0.0.1:8900/');

module.exports = app;
