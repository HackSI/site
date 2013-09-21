#!/usr/bin/env node
var cluster = require('cluster');

if (cluster.isMaster) {
    var master = require('./lib/cluster');
    master(__dirname, 4);
} else {
    var app = require('./app');
    app.listen(8900);
    console.log('Server started http://127.0.0.1:8900/');
}
