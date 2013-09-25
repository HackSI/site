var exphbs  = require('express3-handlebars'),
    express = require('express'),
    helmet = require('helmet'),
    combo = require('combohandler'),
    request = require('./request.js'),
    path = require('path'),
    localCSS = require('./local-css.js'),
    hbs;

module.exports = function(app) {
    app.use(request());
    helmet.defaults(app);

    var s_path = path.join(__dirname, '../static');

    app.use(express['static'](s_path));
    app.get('/combo', combo.combine({rootPath: s_path}), combo.respond);


    hbs = exphbs.create({
        defaultLayout: 'main',
        helpers: localCSS(app)
    });

    app.engine('handlebars', hbs.engine);

    app.set('view engine', 'handlebars');

};
