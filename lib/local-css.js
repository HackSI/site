var Handlebars = require('handlebars');

var localCSS = {};

Handlebars.registerHelper('addCSS', function(url) {
    localCSS[url] = true;
    return '';
});

Handlebars.registerHelper('writeCSS', function() {
    var str = '',
        keys = [],
        env = process.env.NODE_ENV;

    if (env === 'development') {
        Object.keys(localCSS).forEach(function(url) {
            str += '<link rel="stylesheet" href="/static' + url + '"\>\n';
        });
    }
    else {
        str = '<link rel="stylesheet" href="/static/css/bundle.min.css"\>\n';
    }

    return str;
});
