'use strict';

const Hapi = require('hapi');
const routes = require('./lib/routes');

const server = new Hapi.Server();
server.connection({ host: '0.0.0.0', port: parseInt(process.env.PORT, 10) || 8900 });

server.register([require('vision'), require('inert')], (err) => {

    /*istanbul ignore next*/
    if (err) {
        console.log(err);
    }

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
});


server.start(() => {
    console.log(`Launched server at  ${new Date()}`);
    console.log(`Server listening: ${server.info.uri}`);
    console.log(`Working env is: ${process.env.NODE_ENV}`);
});

module.exports = server;
