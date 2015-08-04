var Hapi = require('hapi'),
    routes = require('./lib/routes');

var server = new Hapi.Server();
server.connection({ host: '0.0.0.0', port: parseInt(process.env.PORT, 10) || 8900 });

server.views({
    path: './views',
    layoutPath: './views/layouts',
    layout: 'main',
    partialsPath: './views/partials',
    helpersPath: './lib',
    engines: {
        handlebars: require('handlebars')
    }
});

server.route(routes);
server.start(function() {
    console.log('Launched server at', new Date());
    console.log('Server listening: ' + server.info.uri);
    console.log('Working env is: ' + process.env.NODE_ENV);
});

module.exports = server;
