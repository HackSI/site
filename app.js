#!/usr/bin/env node


const routes = require('./lib/routes');

const PORT = parseInt(process.env.PORT, 10) || 8900;

const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const Handlebars = require('handlebars');

const { engine } = require('express-handlebars');
app.engine('handlebars', engine({
    helpers: {
        addCSS: (file) => { //Needs expanded to do combo files in the future
            const html = `<link rel="stylesheet" href="/static${file}">`;
            return new Handlebars.SafeString(html);
        }
    }
}));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use('/static', express.static('static'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Hacks to make express compatible from Hapi definitions
app.use((req, res, next) => {
    res.view = (template, locals, layout) => {
        res.locals = locals;
        res.render(template, layout);
    };
    res.file = (filename) => {
        const path = require('path');
        res.download(filename, path.basename(filename));
    };
    next();
});

// Hacks to make express compatible from Hapi definitions
routes.forEach(r => {
    const method = r.method.toLowerCase();
    const path = r.path.replace('}', '').replace('{', ':');
    app[method](path, r.handler);
});

// Send all 404's home
app.use((req, res) => {
    res.redirect('/');
});

module.exports.server = app.listen(PORT);
module.exports.app = app;
